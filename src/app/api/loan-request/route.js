import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma';
import { format } from 'date-fns';
import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export async function POST(request) {
  const body = await request.json();

  try {
    console.log("Request Body:", body)

    const {
      personalInfo,
      employmentInfo,
      financialInfo,
      loanDetailsInfo,
    } = body

    console.log("PersonalInfo data:", personalInfo)
    console.log("Employment data:", employmentInfo)
    console.log("Financial data:", financialInfo)
    console.log("Loan Details data data:", loanDetailsInfo)

    const session = await getServerSession(authOptions)
    console.log("SESSION NOW:", session)

    if (!session || !session.user || !session.user.id) {
      console.error("User not authenticated. Session:", session);
      return NextResponse.json({
        error: 'User not authenticated.',
      })
    }

    const userId = session?.user?.id
    // const userIdInt = userId ? parseInt(userId, 10) : null
    console.log("USER ID TYPE:", typeof userId)
    console.log('Session:', session)
    console.log('UserID:', userId)


    const user = await prisma.user.findUnique({
      where: {
        id: userId
      },
      include: {
        personalInfo: true,
        employmentInfo: true,
        financialInfo: true,
        loanDetailsInfo: true,
      }
    })

    const hashedSsn = await hash(personalInfo.ssn, 12)
    const formattedDateSigned = format(new Date(loanDetailsInfo.dateSigned), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")

    console.log("UserID Int:", userId)
    const savedPersonalInfo = await prisma.personalInfo.create({
      data: {
        full_legal_name: personalInfo.fullLegalName,
        date_of_birth: personalInfo.dateOfBirth,
        ssn: hashedSsn,
        marital_status: personalInfo.maritalStatus,
        address_one: personalInfo.addressOne,
        address_two: personalInfo.addressTwo,
        city: personalInfo.city,
        selected_state: personalInfo.selectedState,
        zipcode: personalInfo.zipcode,
        phone: personalInfo.phone,
        email: personalInfo.email,
        user: {
          connect: { id: userId },
        }
      }
    })
    const savedEmploymentInfo = await prisma.employmentInfo.create({
      data: {
        employment_selected: employmentInfo.employmentSelected,
        employers_name: employmentInfo.employersName,
        employers_phone: employmentInfo.employersPhone,
        start_date: employmentInfo.startDate,
        end_date: employmentInfo.endDate || null,
        is_current_position: employmentInfo.isCurrentPosition,
        job_title: employmentInfo.jobTitle,
        job_responsibilities: employmentInfo.jobResponsibilities,
        gross_monthly_income: employmentInfo.grossMonthlyIncome,
        employers_address_one: employmentInfo.employersAddressOne,
        employers_address_two: employmentInfo.EmployersAddressTwo,
        employers_city: employmentInfo.employersCity,
        selected_state: employmentInfo.selectedState,
        employers_zipcode: employmentInfo.employersZipcode,
        user: {
          connect: { id: userId },
        }
      }
    })

    const savedFinancialInfo = await prisma.financialInfo.create({
      data: {
        housing_type_selected: financialInfo.housingTypeSelected,
        housing_monthly_payment: financialInfo.housingMonthlyPayment,
        cc_monthly_debt: financialInfo.ccMonthlyDebt,
        auto_monthly_debt: financialInfo.autoMonthlyDebt,
        student_loans_monthly_debt: financialInfo.studentLoansMonthlyDebt,
        medical_monthly_debt: financialInfo.medicalMonthlyDebt,
        irs_monthly_debt: financialInfo.irsMonthlyDebt,
        bank_name: financialInfo.bankName,
        bank_account_type_selected: financialInfo.bankAccountTypeSelected,
        bank_account_number: financialInfo.bankAccountNumber,
        bank_routing_number: financialInfo.bankRoutingNumber,
        assets: financialInfo.assets,
        asset_desc: financialInfo.assetDesc,
        liabilities: financialInfo.liabilities,
        liabilities_desc: financialInfo.liabilitesDesc,
        user: {
          connect: { id: userId },
        }
      }
    })

    const savedLoanDetailsInfo = await prisma.loanDetailsInfo.create({
      data: {
        loan_amount_requested: loanDetailsInfo.loanAmountRequested,
        loan_purpose_selected: loanDetailsInfo.loanPurposeSelected,
        is_other_selected: loanDetailsInfo.isOtherSelected,
        other_selected_desc: loanDetailsInfo.otherSelectedDesc,
        term_length_selected: loanDetailsInfo.termLengthSelected,
        is_consent_checked: loanDetailsInfo.isConsentChecked,
        applicant_signature: loanDetailsInfo.applicantSignature,
        date_signed: formattedDateSigned,
        user: {
          connect: { id: userId },
        }
      }
    })

    return NextResponse.json({
      personalInfo: savedPersonalInfo,
      employmentInfo: savedEmploymentInfo,
      financialInfo: savedFinancialInfo,
      loanDetailsInfo: savedLoanDetailsInfo,
    })
  } catch (error) {
    console.error("Error adding loan request info:", error)
    console.error("Error details:", error)
    return new NextResponse(
      JSON.stringify({
        error: error.message,
      }),
      {
        status: 500,
      }
    )
  }
}