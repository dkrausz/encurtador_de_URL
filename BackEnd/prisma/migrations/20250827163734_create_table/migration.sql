-- CreateTable
CREATE TABLE "public"."shortenURL" (
    "shortUrl" TEXT NOT NULL,
    "longUrl" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "numberOfAccess" INTEGER NOT NULL,
    "lastAccess" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shortenURL_pkey" PRIMARY KEY ("shortUrl")
);

-- CreateIndex
CREATE UNIQUE INDEX "shortenURL_shortUrl_key" ON "public"."shortenURL"("shortUrl");
