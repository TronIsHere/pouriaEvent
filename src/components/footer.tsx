import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className="bg-darkPrimary mt-10 rounded-xl">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-primaryYellow"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 dark:text-white">
                &quot;The journey to success is paved with knowledge and
                connections. At BizEvent, we unlock both. I&apos;ve distilled
                years of my entrepreneurial journey into actionable insights,
                and I&apos;m thrilled to share them with you. Join us, and
                let&apos;s build your success story together.&quot;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="rounded-full"
                width={24}
                height={24}
                src="/images/p3.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  Pouria Sadeghi
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  Host at BizEvent
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="flex justify-center mt-20 bg-darkPrimary text-white py-2 rounded-md">
        <p>All rights reserved for BizEvent - 2024</p>
      </div>
    </>
  );
};

export default Footer;
