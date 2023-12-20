-- CreateTable
CREATE TABLE "Personal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "ssn" TEXT NOT NULL,
    "marital_status" TEXT NOT NULL,
    "address_one" TEXT NOT NULL,
    "address_two" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "personalId" INTEGER NOT NULL,

    CONSTRAINT "Personal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employment" (
    "id" SERIAL NOT NULL,
    "employment_status" TEXT NOT NULL,
    "employers_name" TEXT NOT NULL,
    "employers_phone" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "currently_employed" BOOLEAN NOT NULL,
    "job_title" TEXT NOT NULL,
    "job_responsibilities" TEXT NOT NULL,
    "gross_monthly_income" INTEGER NOT NULL,
    "employers_address_one" TEXT NOT NULL,
    "employers_address_two" TEXT NOT NULL,
    "employers_city" TEXT NOT NULL,
    "employers_state" TEXT NOT NULL,
    "employers_zipcode" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "employmentId" INTEGER NOT NULL,

    CONSTRAINT "Employment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Financial" (
    "id" SERIAL NOT NULL,
    "housing_type" TEXT NOT NULL,
    "housing_paymnet" INTEGER NOT NULL,
    "cc_debt" INTEGER NOT NULL,
    "auto_loans_debt" INTEGER NOT NULL,
    "student_loans_debt" INTEGER NOT NULL,
    "medical_bills_debt" INTEGER NOT NULL,
    "irs_debt" INTEGER NOT NULL,
    "bank_name" TEXT NOT NULL,
    "account_type" TEXT NOT NULL,
    "account_number" TEXT NOT NULL,
    "routing_number" TEXT NOT NULL,
    "assets" BOOLEAN NOT NULL,
    "debts" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    "financialId" INTEGER NOT NULL,

    CONSTRAINT "Financial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoanDetails" (
    "id" SERIAL NOT NULL,
    "amount_requested" INTEGER NOT NULL,
    "loan_reason" TEXT NOT NULL,
    "loan_term" TEXT NOT NULL,
    "signature" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "loanDetailsId" INTEGER NOT NULL,

    CONSTRAINT "LoanDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Personal_ssn_key" ON "Personal"("ssn");

-- CreateIndex
CREATE UNIQUE INDEX "Personal_userId_key" ON "Personal"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Employment_userId_key" ON "Employment"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Financial_userId_key" ON "Financial"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "LoanDetails_userId_key" ON "LoanDetails"("userId");

-- AddForeignKey
ALTER TABLE "Personal" ADD CONSTRAINT "Personal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employment" ADD CONSTRAINT "Employment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Financial" ADD CONSTRAINT "Financial_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanDetails" ADD CONSTRAINT "LoanDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
