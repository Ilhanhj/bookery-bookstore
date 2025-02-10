import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactUs = () => {
  return (
    <section className="space-y-20 bg-gray-50 px-14 py-10 lg:space-y-4">
      <div className="space-y-4 lg:space-y-4">
        <h1 className="text-xl text-yellow-500">Contact Us</h1>
        <div className="flex w-full flex-col justify-between space-y-4 text-emerald-800 lg:flex-row">
          <div className="font-italiana text-5xl lg:w-[43%]">
            We’re Here for You—And Your Bookshelf
          </div>
          <div className="text-emerald-800 lg:w-[43%]">
            Got questions, recommendations, or just want to share your latest
            book obsession? We’re all ears! Drop us a message, and we’ll get
            back to you faster than you can finish the first chapter. Because
            connecting with fellow readers? That’s our favorite story.
          </div>
        </div>
      </div>
      <div className="mx-auto h-36 rounded-md bg-[url('/assets/contact-us/bg-1.jpg')] bg-cover bg-center lg:h-72 lg:w-full"></div>
      <div className="w-full lg:pt-10">
        <div className="mx-auto w-full">
          <div className="flex flex-col items-center justify-between rounded-md bg-gradient-to-r from-emerald-600 to-emerald-800 p-10 lg:flex-row lg:px-20 lg:py-14">
            <div className="mb-5 block text-center lg:mb-0 lg:pe-5 lg:text-left">
              <h2 className="mb-5 font-italiana text-4xl font-semibold text-white lg:mb-2">
                Let’s Turn the Page Together!
              </h2>
              <p className="text-xl text-emerald-100">
                Questions, ideas, or just looking for book recommendations?
                We’re here to help – reach out now!
              </p>
            </div>
            <a
              href="javascript:;"
              className="flex w-fit items-center justify-center gap-2 rounded-full bg-yellow-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-500 hover:bg-yellow-500 lg:mx-0"
            >
              Get In Touch
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                  stroke="#fff"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="space-y-20 lg:space-y-40 lg:pt-8">
        <div className="flex w-full flex-col justify-between space-y-20 text-emerald-800 lg:flex-row lg:space-y-0">
          <div className="flex flex-col space-y-4 lg:w-[43%]">
            <h1 className="font-italiana text-5xl text-emerald-800">
              Frequently Asked Questions <br></br>
            </h1>
            <h1 className="text-md text-neutral-400">
              From shipping details to finding that perfect read, our FAQs page
              is here to help. Whether you’re curious about our store policies
              or just need a quick book recommendation, you’ll find all the
              answers right here—no plot twist.
            </h1>
          </div>
          <div className="lg:w-[43%]">
            <Accordion
              type="single"
              collapsible
              className="lg:w-full lg:space-y-10"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-italiana text-2xl text-emerald-800">
                  Do you ship internationally?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we do! Whether you`re in the next town or halfway across
                  the globe, we`ll make sure your books get to you safely.
                  Shipping rates and times may vary based on your location.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-italiana text-2xl text-emerald-800">
                  Can I return a book if I don’t like it?
                </AccordionTrigger>
                <AccordionContent>
                  We want you to love what you read! You can return any book
                  within 30 days of purchase as long as it’s in its original
                  condition. See our return policy for more details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-italiana text-2xl text-emerald-800">
                  Do you sell e-books or just physical copies?
                </AccordionTrigger>
                <AccordionContent>
                  We offer both! Whether you’re a fan of flipping pages or
                  swiping screens, we’ve got you covered. Browse our e-book
                  collection for instant access to your next great read.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-italiana text-2xl text-emerald-800">
                  How can I track my order?{" "}
                </AccordionTrigger>
                <AccordionContent>
                  Once your order ships, we’ll send you a tracking number via
                  email. Use it to follow your books’ journey to your doorstep.
                  Excitement guaranteed!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-italiana text-2xl text-emerald-800">
                  Do you have gift cards?{" "}
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! Our gift cards are the perfect way to share the
                  love of reading. They’re available in various amounts and
                  never expire—because books are always a good idea.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="flex h-56 w-full flex-col items-center justify-center gap-2 rounded-md bg-gradient-to-r from-emerald-600 to-emerald-800 lg:h-72 lg:gap-4">
          <h1 className="text-md font-italiana text-yellow-500 lg:text-xl">
            Start Today !
          </h1>
          <h1 className="text-center font-italiana text-3xl text-white lg:text-5xl">
            Escape into Stories, One Book at a Time.
          </h1>
          <a
            href="javascript:;"
            className="flex w-fit items-center justify-center gap-2 rounded-full bg-yellow-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-500 hover:bg-yellow-500 lg:mx-0"
          >
            Get In Touch
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                stroke="#fff"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-full lg:space-y-4">
          <h1 className="text-md text-neutral-400">Investor</h1>
          <h1 className="font-italiana text-5xl text-emerald-800">
            Our partners in this storied journey
          </h1>
          <div className="grid grid-cols-2 justify-center gap-4 lg:ms-10 lg:grid-cols-4 lg:pt-5">
            <svg
              role="img"
              width="150"
              height="150"
              className="fill-current text-emerald-800"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>abuse.ch</title>
              <path d="M22.8924 10.3775c.0193 0 .1179-.1827.3828-.2534.1078-.0287.3585-.0506.5405.0957.14.1127.1843.2965.1843.4838v1.127h-.2747V10.748c0-.362-.1831-.4094-.3296-.4094-.2709 0-.444.2105-.5033.296v1.1961h-.2746v-2.566h.2746zm-.9543.0514c-.189-.072-.391-.1213-.6007-.0514-.1745.0582-.2643.1976-.3101.3154-.032.084-.0479.1885-.0479.3137 0 .1758.0436.332.1436.4519.1925.2208.5373.2171.8417.0921v.2286c-.066.0388-.1671.0616-.186.0656-.088.0215-.5326.111-.8418-.179-.3632-.3404-.2155-.937-.2109-.9551.038-.1422.1081-.2924.2357-.4058.348-.3025.805-.2036.9764-.1046zm-5.9987 2.7958h1.7657v.5501h-2.423v-3.5904h2.3264v.5501h-1.669v.9285h1.4329v.55h-1.433zm-2.2842-.4803c0-.3335-.317-.4122-.8104-.5125a4.1973 4.1973 0 0 1-.3998-.1074c-.3907-.132-.5171-.3607-.5662-.4588-.1187-.2373-.1168-.6487.0134-.9231.2446-.5224.7924-.6253 1.186-.6253.444 0 .8488.1051 1.0761.2013v.5635c-.186-.0733-.365-.1261-.5367-.1583-.2899-.058-1.1565-.181-1.1565.4213 0 .0776.0048.2482.2146.373.2305.1308.4677.1222.9366.2683.1395.0412.263.0993.3703.1744.1073.0752.1923.1736.2549.2952.0626.1199.0939.2737.0939.4616 0 .3168-.1006.6336-.4132.8533-.3229.2255-.7791.271-1.0949.271-.3327 0-.7674-.0646-1.0465-.22v-.5555c.3126.1358.6309.22 1.0385.22.3188 0 .8399-.0718.8399-.542zm-5.2521.8855c-.5869-.3576-.5957-1.0336-.5957-1.331v-2.1145h.6574V12.24c0 .242.0154.7371.3891.9419.2631.1406.66.1406.923 0 .374-.2048.3892-.7003.3892-.9419v-2.0555h.6574v2.1146c0 .1502-.0089.2862-.0268.4078-.036.2726-.1623.6781-.577.9231-.4836.2828-1.3341.2865-1.8166 0zm-1.6215-2.4902c0 .1557-.0348.2988-.1046.4294-.0698.1288-.1852.2361-.3462.322v.0107c.1734.059.4509.1987.5582.5072.077.2086.0707.5612-.1422.8506-.0698.093-.1628.179-.2791.2576-.3154.2135-.7248.2434-.9768.255-.4364.0058-.873.0027-1.3095.0027v-3.5904h1.2478c.2853 0 .6671.0247.9607.2361.2757.193.3917.4718.3917.7191zM4.839 12.2131v1.0116h.4293a4.68 4.68 0 0 0 .2952-.008c.2888-.0252.5883-.114.6681-.3622.018-.0576.1233-.455-.3193-.5957-.1148-.0357-.2588-.0457-.4508-.0457zm.593-.5501c.1444 0 .4811-.0001.6091-.2227.0837-.143.0917-.3476-.008-.4991-.1227-.191-.418-.2067-.6548-.2067H4.839v.9285zm-4.0061-1.4794L0 13.7736h.7012c.2284-.5948.457-1.1895.6855-1.7843.0984-.252.2107-.5654.336-.9409h.0117c.3084.92.6724 1.8201 1.0215 2.7252h.6953l-1.4258-3.59zm17.604 5.3065h.2932V8.51h-.2932z" />
            </svg>
            <svg
              role="img"
              width="150"
              height="150"
              className="fill-current text-emerald-800"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fairphone</title>
              <path d="M3.25 12.358c.124-.306.25-.612.38-.918.058.306.12.613.185.918H3.25zm.129-1.943a46.426 46.426 0 0 0-1.396 3.151h.649a.234.234 0 0 0 .216-.154c.05-.137.102-.273.155-.41h.957l.103.411a.2.2 0 0 0 .195.155h.667a38.402 38.402 0 0 1-.752-3.152l-.794-.001zm1.935 3.152h.784c.062-1.044.17-2.089.321-3.134h-.783a36.666 36.666 0 0 0-.322 3.134m3.23-2.018c-.029.25-.201.407-.467.407h-.388c.028-.273.06-.546.094-.819h.384c.262 0 .41.134.378.402v.009m.793-.04c0-.008.002-.016.003-.023.037-.318-.026-.56-.172-.734-.17-.206-.461-.318-.871-.318H6.882c-.035.234-.067.468-.096.703h.218c-.103.81-.178 1.62-.226 2.43h.78c.02-.323.043-.646.07-.97h.278c.128.285.26.57.394.856a.2.2 0 0 0 .183.115h.756a53.18 53.18 0 0 1-.542-1.137 1.11 1.11 0 0 0 .64-.922m2.093.062c-.031.264-.212.43-.487.43h-.274c.03-.293.062-.572.099-.865h.27c.283 0 .427.134.393.42l-.001.014m-.257-1.137H9.866c-.033.23-.066.473-.096.703h.217a36.478 36.478 0 0 0-.224 2.432h.78c.018-.303.04-.606.065-.909h.3c.669-.009 1.225-.367 1.31-1.12l.002-.017c.083-.703-.326-1.088-1.046-1.088m3.032 1.19h-.866c.044-.396.096-.793.154-1.19h-.784a36.105 36.105 0 0 0-.32 3.134h.784c.023-.403.053-.806.09-1.209h.867c-.037.403-.067.806-.09 1.21h.788a36.75 36.75 0 0 1 .321-3.135h-.789c-.058.397-.11.794-.154 1.19m6.068.386a52.412 52.412 0 0 1-.847-1.631l-.718.12a36.018 36.018 0 0 0-.312 3.07h.773c.031-.547.076-1.095.133-1.642.278.516.566 1.032.865 1.548a.188.188 0 0 0 .163.094h.59a36.75 36.75 0 0 1 .32-3.134h-.772c-.076.526-.142 1.051-.196 1.576M.941 11.713c.02-.185.042-.37.066-.556h1.427c.031-.24.064-.482.1-.724H.104c-.036.242-.069.483-.1.725h.218A35.93 35.93 0 0 0 0 13.568h.784c.023-.386.052-.773.087-1.16h.845a.247.247 0 0 0 .236-.221c.016-.158.032-.315.05-.473H.94zm21.461 1.147c.015-.18.03-.359.047-.538h.859a.247.247 0 0 0 .237-.221c.014-.149.03-.297.047-.446h-1.075c.02-.172.04-.343.062-.515h1.324c.03-.235.063-.471.097-.707h-2.317c-.035.236-.067.471-.097.707h.218a35.363 35.363 0 0 0-.225 2.427h2.119c.013-.236.03-.471.048-.707h-1.344zm-5.079-.795-.005.049c-.054.542-.293.782-.66.782-.36 0-.59-.332-.535-.874 0-.016.003-.033.005-.049.056-.542.349-.869.71-.869a.46.46 0 0 1 .408.225l-.11.106c.093.15.217.357.188.63m.414-1.202.108-.105c-.212-.243-.52-.383-.903-.383-.818 0-1.52.658-1.616 1.593l-.007.068c-.095.94.463 1.59 1.286 1.59.822 0 1.419-.572 1.513-1.508l.007-.067a1.545 1.545 0 0 0-.388-1.188" />
            </svg>
            <svg
              role="img"
              width="150"
              height="150"
              className="fill-current text-emerald-800"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Comsol</title>
              <path d="M15.53833 11.13097c-.11125.1301-.1384.3006-.1384.38725l.2974-.00005c0-.1475.0921-.2303.1478-.27135.0377-.0278.1422-.0786.2357-.0786.1468 0 .3338.0001.3338 0h1.22156l.00025.0001c.0725 0 .1312-.0589.1312-.13125 0-.0725-.0587-.13135-.1312-.13135h-1.16086c-.17195 0-.2702-.001-.43035-.001-.2305 0-.39225.0922-.5069.2263m4.72086-.2253h-.8968s-1.0709-.0563-1.0709 1.0941c0 1.15066 1.0709 1.09436 1.0709 1.09436h.8968s1.07075.0563 1.07075-1.09435c0-1.0479-.8884-1.09455-1.04675-1.09455-.0155 0-.024.00045-.024.00045m-1.68005 1.0941s-.0658-.83165.80665-.83165h.85c.8722 0 .8065.83165.8065.83165s.0657.83165-.8065.83165h-.85c-.87245 0-.80665-.83165-.80665-.83165m-8.49447-1.0941h-.8968s-1.0709-.0563-1.0709 1.0941c0 1.15065 1.0709 1.09435 1.0709 1.09435h.8968s1.07065.0563 1.07065-1.09435c0-1.0479-.8883-1.09455-1.0467-1.09455-.0154 0-.0239.00045-.0239.00045m-1.68015 1.0941s-.0658-.83165.8067-.83165h.85005c.8722 0 .80655.83165.80655.83165s.0657.83165-.80655.83165h-.85005c-.87245 0-.8067-.83165-.8067-.83165m-3.31101.00015c0 1.15065 1.07085 1.09435 1.07085 1.09435h1.44441c.002.00005.003.0005.005.0005.0725 0 .13125-.0588.13125-.1313 0-.0725-.0588-.1313-.13125-.1313v-.00055H6.18816c-.87245 0-.80665-.8317-.80665-.8317s-.0658-.83165.80665-.83165h1.42546s.00005.0001.0002.0001c.0725 0 .13125-.0589.13125-.13125 0-.0725-.0588-.13135-.13125-.13135H6.16466s-.009-.00045-.0241-.00045c-.1584 0-1.0468.0467-1.0468 1.0946m-2.60715-1.09455c-.17581 0-.31831.14255-.31831.31825v1.55225c0 .1758.1425.31825.31831.31825h1.23395c.1757 0 .3183-.14245.3183-.31825v-1.55225c0-.1757-.1426-.31825-.3183-.31825zm-2.16836 0c-.17575 0-.31825.14254-.31825.31824l.00005.0003c0 .00035-.00005.00065-.00005.001 0 .0756.0273.14415.0711.1988l.001.004 1.2323 1.5509.003.001c.0587.0693.1451.1141.2429.1141.00035 0 .0007-.0001.001-.0001l.00025.0001c.17575 0 .3183-.14245.3183-.31825v-1.55225c0-.1757-.14255-.31825-.3183-.31825zm21.49285.13175h-.00015v2.0578h2.0579v-.00015c.0725 0 .13115-.0588.13115-.1313 0-.0724-.0587-.1313-.13115-.1313H22.0735v-1.79505c0-.0725-.0588-.13135-.13125-.13135-.0725 0-.13115.0588-.13115.13135m-7.18002-.088-.0005-.00055-1.39595 1.39585-1.40976-1.40965-.001.001c-.0227-.0187-.0513-.0303-.083-.0303-.0725 0-.13115.0588-.13115.13135h-.00015v2.0578h.2626v-1.74165l1.27031 1.27015c.006.005.0114.009.0171.0129.004.002.007.004.0112.007.004.002.007.004.0109.006.002.00095.004.002.006.003.0386.0158.0728.01.0977-.001.00095-.00035.002-.0009.003-.001.007-.003.013-.006.0181-.01.001-.00085.003-.002.004-.003.0116-.008.0181-.0147.0181-.0147v.00015l1.2683-1.2682v1.74095h.2627v-2.0578h-.00015c0-.0725-.0587-.13135-.1311-.13135-.0386 0-.0728.0169-.0969.0433m.7691.5691c0 .0867.0272.2573.1384.38735.11465.134.2764.2264.5069.2264.16015 0 .2584-.001.43035-.001h.0163v.00025h.73801c.0935 0 .19795.0508.23575.0786.0557.0409.1477.1237.1477.27125h.2975c0-.0864-.0271-.2571-.13835-.38725-.11465-.13405-.27645-.2264-.50705-.2264-.1602 0-.25835.001-.4302.001h-.0164v-.00025h-.73796c-.0935 0-.19795-.0507-.2357-.0786-.0557-.041-.1478-.12385-.1478-.27145zm2.21341.96295c0 .1474-.092.2303-.1477.2712-.0378.028-.14225.0786-.23575.0786-.1467 0-.3339-.00015-.3339 0h-1.36481v.001c-.0725 0-.13125.0588-.13125.1313 0 .0725.0588.1312.13125.1312.004 0 .007-.0008.0111-.001h1.29301c.17185 0 .27.001.4302.001.2306 0 .3924-.0923.50705-.22635.11125-.13015.13835-.30075.13835-.3874z" />
            </svg>
            <svg
              role="img"
              width="150"
              height="150"
              className="fill-current text-emerald-800"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Carto</title>
              <path d="M19.138 7.138C21.823 7.138 24 9.3147 24 12s-2.1769 4.862-4.862 4.862c-1.9046 0-3.5532-1.0949-4.351-2.6896h.4683c.7615 1.358 2.215 2.2759 3.8826 2.2759 2.4567 0 4.4483-1.9916 4.4483-4.4483 0-2.4567-1.9916-4.4483-4.4483-4.4483-1.6677 0-3.1211.9178-3.8826 2.2759h-.4683c.7978-1.5947 2.4464-2.6897 4.351-2.6897zm0 3.3103c.8569 0 1.5517.6947 1.5517 1.5517 0 .857-.6948 1.5517-1.5518 1.5517-.857 0-1.5517-.6947-1.5517-1.5517 0-.857.6948-1.5517 1.5517-1.5517zm-17.5772.0109c.6066 0 .9968.2545 1.2597.615l-.6192.4793c-.1697-.2079-.3648-.3478-.649-.3478-.4156 0-.7083.3562-.7083.7889v.008c0 .4453.2927.793.7083.793.3096 0 .492-.144.6702-.3604l.6192.4411c-.2799.386-.6574.6701-1.3105.6701C.6829 13.547 0 12.898 0 12.0116v-.008c0-.8652.6617-1.5439 1.5608-1.5439zm4.7346.0382l1.264 2.9902h-.8822l-.212-.5344H5.3156l-.212.5344h-.861l1.2596-2.9902zm4.27.0212c.454 0 .7678.1187.9671.318.174.174.263.3988.263.6914v.008c0 .458-.2418.7592-.6108.9162l.7083 1.0349h-.9458l-.598-.8992h-.3648v.8992h-.8228v-2.969zm5.3983 0v.721h-.8907v2.248h-.8228v-2.248h-.8864v-.721zm-10.0712.9543l-.335.8398h.6658zm4.6348-.246h-.5429v.7168h.5472c.2756 0 .441-.1357.441-.352v-.008c0-.2375-.1738-.3563-.4453-.3563z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
