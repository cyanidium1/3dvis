import Container from "@/components/container";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { SelectedKeysContext } from "./_app";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader";
import ContactForm from "@/components/contactForm";

const ContentSection = ({
  index,
  title,
  description,
  price,
  buttonText,
  imageUrl,
  horizontalTitle,
  router,
}) => {
  console.log("Rendering ContentSection:", {
    index,
    title,
    description,
    price,
    buttonText,
    imageUrl,
    horizontalTitle,
  });

  return (
    <div className="container mx-auto pt-4 lg:mb-[128px]">
      <div className="grid grid-cols-[2fr_30px_2fr] md:grid-cols-[2fr_85px_2fr] items-stretch">
        <div className="col-span-1" data-aos="fade-up">
          <img
            alt="section-image"
            src={imageUrl}
            className="mx-auto object-cover w-full min-w-[239px] max-h-[502px] max-w-[502px]"
          />
        </div>
        <div className="col-span-1 flex flex-col justify-center ml-8 md:ml-0">
          <span className="text-[32px] sm:text-[46px] dark:text-[#f1ccae] font-playfair text-[#4c4037] transform -rotate-90 whitespace-nowrap">
            {horizontalTitle}
          </span>
        </div>
        <div className="col-start-1 col-end-4 md:col-auto self-center lg:ml-20 mt-6 lg:mt-0">
          <p className="text-[10px] dark:text-[#f1ccae] text-[#4c4037]">
            {index}
          </p>
          <p className="text-[40px] dark:text-[#f1ccae] font-playfair text-[#4c4037]">
            {title}
          </p>
          <p className="text-[18px] dark:text-[#f1ccae] font-light max-w-[384px]">
            {description}
          </p>
          <p className="mt-4 text-xl">{price}</p>
          <button
            onClick={() => router.push("/contact")}
            className="hover-border dark:text-[#f1ccae] font-playfair text-[10px] text-[#4c4037] py-[16px] mt-3 cursor-pointer"
            style={{
              fontFamily: "Manrope",
              letterSpacing: "3px",
              display: "inline-block",
              maxWidth: "105px",
              borderBottom: "none",
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [pageContent1, setPageContent1] = useState(null);
  const { contactsData, servicesData } = useContext(SelectedKeysContext);
  const [pageContent, setPageContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (contactsData) {
      console.log("contactsData loaded:", contactsData);
      setPageContent1(contactsData);
      setTimeout(() => setIsLoading(false), 1000);
    } else {
      console.warn("contactsData is not available");
    }
  }, [contactsData]);

  useEffect(() => {
    if (servicesData) {
      console.log("servicesData loaded:", servicesData);
      setPageContent(servicesData);
      setTimeout(() => setIsLoading(false), 1000);
    } else {
      console.warn("servicesData is not available");
    }
  }, [servicesData]);

  console.log("Rendering Home component:", {
    isLoading,
    pageContent,
    pageContent1,
  });

  return (
    <Layout>
      {isLoading ? (
        <div className="loader-wrapper">
          <Loader />
        </div>
      ) : (
        <div className="bg-[#f9f1ec] dark:bg-black text-[#4c4037] dark:text-[#f1ccae] flex justify-center items-center">
          <Container>
            <div className="flex flex-col py-[80px] lg:py-[128px]">
              <motion.section className="flex gap-[8px] items-center">
                <motion.p
                  className="text-left text-[40px] md:text-[112px] text-[#4c4037] dark:text-[#f1ccae] playFairFont"
                  initial={{ x: -500, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    duration: 3,
                  }}
                >
                  <span> &mdash;</span> {pageContent?.header}
                </motion.p>
              </motion.section>
              <p className="text-[18px] text-[#957f72] font-light max-w-[512px] mt-[24px] dark:text-[#f1ccae]">
                {pageContent?.description}
              </p>
            </div>

            <ContentSection
              index="01"
              title={pageContent?.title}
              description={pageContent?.desc}
              price={pageContent?.price1}
              buttonText={pageContent?.btn}
              imageUrl={pageContent?.img?.url}
              horizontalTitle={pageContent?.horizontalTitle}
              router={router}
            />
            <ContentSection
              index="02"
              title={pageContent?.title2}
              description={pageContent?.desc2}
              price={pageContent?.price2}
              buttonText={pageContent?.btn2}
              imageUrl={pageContent?.img2?.url}
              horizontalTitle={pageContent?.horizontalTitle2}
              router={router}
            />
            <ContentSection
              index="03"
              title={pageContent?.title3}
              description={pageContent?.desc3}
              price={pageContent?.price3}
              buttonText={pageContent?.btn3}
              imageUrl={pageContent?.img3?.url}
              horizontalTitle={pageContent?.horizontalTitle3}
              router={router}
            />

            <div className="text-center mb-8">
              <span className="dark:text-[#f1ccae] font-normal tracking-wider self-center text-[32px] sm:text-[46px] font-playfair text-[#4c4037] whitespace-nowrap">
                {pageContent?.formaction}
              </span>
            </div>
            <ContactForm pageContent={pageContent1} type="3D виз." />
          </Container>
        </div>
      )}
      <Footer />
    </Layout>
  );
}
