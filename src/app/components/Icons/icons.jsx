import React from "react";

export const Brain = ({ fill = "fill-gray-white" }) => {
  return (
    <svg
      aria-label="Brain"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
    >
      <path
        d="M12.0207 2.18182C16.2534 2.18182 19.657 5.60727 19.657 9.81818C19.657 12.8727 17.8789 15.48 15.2934 16.7018V21.8182H7.65705V18.5455H6.56614C5.35523 18.5455 4.38432 17.5745 4.38432 16.3636V13.0909H2.74796C2.28978 13.0909 2.02796 12.5455 2.28978 12.2073L4.38432 9.44727C4.59159 5.4 7.90796 2.18182 12.0207 2.18182ZM12.0207 0C7.01341 0 2.86796 3.73091 2.26796 8.61818L0.566139 10.9091H0.533412L0.511594 10.9418C-0.0884061 11.7709 -0.16477 12.8618 0.304321 13.7673C0.697048 14.52 1.39523 15.0436 2.2025 15.2073V16.3636C2.2025 18.3818 3.59887 20.0945 5.47523 20.5855V24H17.4752V18C20.2025 16.1782 21.8389 13.1564 21.8389 9.81818C21.8389 4.39636 17.4316 0 12.0207 0ZM16.7443 9.05455L14.6061 9.61091L16.177 11.2036C16.5589 11.5745 16.5589 12.2073 16.177 12.5891C15.7952 12.9709 15.1625 12.9709 14.7916 12.5891L13.2098 11.0182L12.6425 13.1564C12.5116 13.6909 11.977 13.9855 11.4752 13.8545C10.9298 13.7127 10.6243 13.1782 10.7552 12.6436L11.3334 10.5055L9.19523 11.0836C8.66068 11.2145 8.12614 10.9091 7.98432 10.3636C7.85341 9.87273 8.15887 9.32727 8.6825 9.19636L10.8207 8.62909L9.24978 7.04727C8.86796 6.67636 8.86796 6.05455 9.24978 5.66182C9.63159 5.28 10.2643 5.28 10.6352 5.66182L12.228 7.23273L12.7843 5.09455C12.9152 4.56 13.4607 4.25455 13.9734 4.39636C14.508 4.53818 14.8134 5.07273 14.6716 5.59636L14.0934 7.74546L16.2425 7.16727C16.7661 7.02545 17.3007 7.33091 17.4425 7.86545C17.5843 8.37818 17.2789 8.92364 16.7443 9.05455Z"
        className={fill}
      />
    </svg>
  );
};

export const Text = ({ fill = "fill-gray-white" }) => {
  return (
    <svg
      aria-label="Text"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M0 2.4C0 1.08 1.08 0 2.4 0H7.2V2.4H2.4V7.2H0V2.4ZM24 21.6C24 22.932 22.932 24 21.6 24H16.8V21.6H21.6V16.8H24V21.6ZM2.4 24C1.08 24 0 22.932 0 21.6V16.8H2.4V21.6H7.2V24H2.4ZM21.6 0C22.932 0 24 1.08 24 2.4V7.2H21.6V2.4H16.8V0H21.6ZM8.4 6V8.4H10.8V18H13.2V8.4H15.6V6H8.4Z"
        className={fill}
      />
    </svg>
  );
};

export const Y = ({ size = "lg" }) => {
  switch (size) {
    case "lg":
      return (
        <svg
          aria-label="Y"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_3605_4208)">
            <path
              d="M18.6 0H5.4C2.41766 0 0 2.41766 0 5.4V18.6C0 21.5823 2.41766 24 5.4 24H18.6C21.5823 24 24 21.5823 24 18.6V5.4C24 2.41766 21.5823 0 18.6 0Z"
              fill="#3E424A"
            />
            <path
              d="M18.6 0.5H5.4C2.6938 0.5 0.5 2.6938 0.5 5.4V18.6C0.5 21.3062 2.6938 23.5 5.4 23.5H18.6C21.3062 23.5 23.5 21.3062 23.5 18.6V5.4C23.5 2.6938 21.3062 0.5 18.6 0.5Z"
              stroke="url(#paint0_linear_3605_4208)"
            />
            <path
              d="M7.54102 7.31824H9.28604L11.9458 11.9468H12.0552L14.715 7.31824H16.46L12.7662 13.5029V17.5001H11.2349V13.5029L7.54102 7.31824Z"
              fill="#F9FAFC"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_3605_4208"
              x1="12"
              y1="0.500003"
              x2="24.4664"
              y2="1.03634"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#D1CAE4" />
            </linearGradient>
            <clipPath id="clip0_3605_4208">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "md":
      return (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_22073_20161)">
            <path
              d="M12.4 0.6875H3.6C1.61177 0.6875 0 2.29927 0 4.2875V13.0875C0 15.0757 1.61177 16.6875 3.6 16.6875H12.4C14.3882 16.6875 16 15.0757 16 13.0875V4.2875C16 2.29927 14.3882 0.6875 12.4 0.6875Z"
              fill="#2E2E33"
            />
            <path
              d="M12.4007 1.02051H3.60065C1.79652 1.02051 0.333984 2.48304 0.333984 4.28717V13.0872C0.333984 14.8913 1.79652 16.3538 3.60065 16.3538H12.4007C14.2048 16.3538 15.6673 14.8913 15.6673 13.0872V4.28717C15.6673 2.48304 14.2048 1.02051 12.4007 1.02051Z"
              stroke="url(#paint0_linear_22073_20161)"
              strokeWidth="0.666667"
            />
            <path
              d="M5.02734 5.56641H6.19069L7.96386 8.65209H8.0368L9.81 5.56641H10.9733L8.5108 9.68949V12.3543H7.48993V9.68949L5.02734 5.56641Z"
              fill="#F9FAFD"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_22073_20161"
              x1="8.00065"
              y1="1.02051"
              x2="16.3116"
              y2="1.37807"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#D1CAE4" />
            </linearGradient>
            <clipPath id="clip0_22073_20161">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0 0.6875)"
              />
            </clipPath>
          </defs>
        </svg>
      );
  }
};

export const Subtract = () => {
  return (
    <svg
      aria-label="Subtract"
      xmlns="http://www.w3.org/2000/svg"
      width="334"
      height="203"
      viewBox="0 0 334 203"
      fill="none"
    >
      <mask id="path-1-inside-1_3839_1693" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M191.576 20.2001C188.079 20.2001 184.583 21.5427 181.753 23.7244C174.428 29.4303 173.096 40.0031 178.757 47.2194V47.3872L267.157 161.506V203H0.272775C0.258097 202.002 0.250732 201.002 0.250732 200C0.250732 89.5431 89.7938 0 200.251 0C211.703 0 222.93 0.962567 233.857 2.81121C233.683 6.66212 234.815 10.5812 237.357 13.8229L333.25 137.675H333.749V203H300.453V149.926L205.06 26.7452C201.897 22.5496 196.903 20.2001 191.576 20.2001Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M191.576 20.2001C188.079 20.2001 184.583 21.5427 181.753 23.7244C174.428 29.4303 173.096 40.0031 178.757 47.2194V47.3872L267.157 161.506V203H0.272775C0.258097 202.002 0.250732 201.002 0.250732 200C0.250732 89.5431 89.7938 0 200.251 0C211.703 0 222.93 0.962567 233.857 2.81121C233.683 6.66212 234.815 10.5812 237.357 13.8229L333.25 137.675H333.749V203H300.453V149.926L205.06 26.7452C201.897 22.5496 196.903 20.2001 191.576 20.2001Z"
        fill="url(#paint0_linear_3839_1693)"
      />
      <path
        d="M181.753 23.7244L181.143 22.9324L181.139 22.9355L181.753 23.7244ZM178.757 47.2194H179.757V46.874L179.543 46.6022L178.757 47.2194ZM178.757 47.3872H177.757V47.7293L177.966 47.9996L178.757 47.3872ZM267.157 161.506H268.157V161.164L267.948 160.894L267.157 161.506ZM267.157 203V204H268.157V203H267.157ZM0.272775 203L-0.727117 203.015L-0.712629 204H0.272775V203ZM233.857 2.81121L234.856 2.85626L234.895 1.97276L234.023 1.82522L233.857 2.81121ZM237.357 13.8229L238.148 13.2107L238.144 13.2057L237.357 13.8229ZM333.25 137.675L332.459 138.288L332.759 138.675H333.25V137.675ZM333.749 137.675H334.749V136.675H333.749V137.675ZM333.749 203V204H334.749V203H333.749ZM300.453 203H299.453V204H300.453V203ZM300.453 149.926H301.453V149.584L301.244 149.314L300.453 149.926ZM205.06 26.7452L204.262 27.3472L204.27 27.3574L205.06 26.7452ZM182.364 24.5164C185.044 22.45 188.33 21.2001 191.576 21.2001V19.2001C187.829 19.2001 184.123 20.6353 181.143 22.9324L182.364 24.5164ZM179.543 46.6022C174.23 39.8281 175.473 29.8842 182.368 24.5133L181.139 22.9355C173.384 28.9764 171.963 40.1781 177.97 47.8366L179.543 46.6022ZM179.757 47.3872V47.2194H177.757V47.3872H179.757ZM267.948 160.894L179.547 46.7748L177.966 47.9996L266.367 162.118L267.948 160.894ZM268.157 203V161.506H266.157V203H268.157ZM0.272775 204H267.157V202H0.272775V204ZM-0.749268 200C-0.749268 201.007 -0.741867 202.012 -0.727117 203.015L1.27267 202.985C1.25806 201.992 1.25073 200.997 1.25073 200H-0.749268ZM200.251 -1C89.2415 -1 -0.749268 88.9908 -0.749268 200H1.25073C1.25073 90.0953 90.3461 1 200.251 1V-1ZM234.023 1.82522C223.042 -0.0327073 211.759 -1 200.251 -1V1C211.647 1 222.819 1.95784 233.69 3.7972L234.023 1.82522ZM238.144 13.2057C235.757 10.1624 234.692 6.48137 234.856 2.85626L232.858 2.76616C232.674 6.84287 233.872 10.9999 236.571 14.44L238.144 13.2057ZM334.04 137.063L238.148 13.2107L236.567 14.4351L332.459 138.288L334.04 137.063ZM333.749 136.675H333.25V138.675H333.749V136.675ZM334.749 203V137.675H332.749V203H334.749ZM300.453 204H333.749V202H300.453V204ZM299.453 149.926V203H301.453V149.926H299.453ZM204.27 27.3574L299.663 150.539L301.244 149.314L205.851 26.1329L204.27 27.3574ZM191.576 21.2001C196.61 21.2001 201.3 23.4184 204.262 27.3472L205.859 26.1432C202.495 21.6808 197.196 19.2001 191.576 19.2001V21.2001Z"
        fill="url(#paint1_linear_3839_1693)"
        mask="url(#path-1-inside-1_3839_1693)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3839_1693"
          x1="167"
          y1="0"
          x2="167"
          y2="203"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C0C5E4" stopOpacity="0.157" />
          <stop offset="0.5" stopColor="#BDC8FF" stopOpacity="0.09" />
          <stop offset="1" stopColor="#36313C" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3839_1693"
          x1="0.250732"
          y1="101.5"
          x2="333.749"
          y2="101.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#8F8F8F" stopOpacity="0.67" />
          <stop offset="1" stopOpacity="0.04" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const SmallDot = ({ fill = "fill-gray-4" }) => {
  return (
    <svg
      aria-label="SmallDot"
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="2"
      viewBox="0 0 2 2"
      fill="none"
    >
      <path
        d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.555 0.45 2 1 2C1.555 2 2 1.555 2 1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0Z"
        className={fill}
      />
    </svg>
  );
};

export const FeatureTick = ({ fill = "fill-gray-white" }) => {
  return (
    <svg
      aria-label="FeatureTick"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
    >
      <path
        d="M11.8333 1.00006L3.83334 9.00006L0.166672 5.33339L1.10667 4.39339L3.83334 7.11339L10.8933 0.0600586L11.8333 1.00006Z"
        className={fill}
      />
    </svg>
  );
};

// export const Left = ({ fill = "fill-gray-white" }) => {
//   return (
//     <svg
//       aria-label="Left"
//       xmlns="http://www.w3.org/2000/svg"
//       width="4"
//       height="8"
//       viewBox="0 0 4 8"
//       fill="none"
//     >
//       <path
//         d="M4 1.52757L1.52767 3.9999L4 6.47764L3.23887 7.23877L0 3.9999L3.23887 0.761037L4 1.52757Z"
//         className={fill}
//       />
//     </svg>
//   );
// };

export const CircleTick = () => {
  return (
    <svg
      aria-label="CircleTick"
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M24 0C10.8 0 0 10.8 0 24C0 37.2 10.8 48 24 48C37.2 48 48 37.2 48 24C48 10.8 37.2 0 24 0ZM24 43.2C13.416 43.2 4.8 34.584 4.8 24C4.8 13.416 13.416 4.8 24 4.8C34.584 4.8 43.2 13.416 43.2 24C43.2 34.584 34.584 43.2 24 43.2ZM35.016 13.392L19.2 29.208L12.984 23.016L9.6 26.4L19.2 36L38.4 16.8L35.016 13.392Z"
        fill="url(#paint0_linear_3681_3587)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3681_3587"
          x1="24"
          y1="5.45161e-06"
          x2="50.0169"
          y2="1.11931"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#D1CAE4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const Star = ({ fill = "fill-gray-white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        d="M8.33398 0L10.1301 5.52786H15.9424L11.2402 8.94427L13.0363 14.4721L8.33398 11.0557L3.6317 14.4721L5.42781 8.94427L0.725532 5.52786H6.53787L8.33398 0Z"
        className={fill}
      />
    </svg>
  );
};

export const Electric = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="268"
      height="286"
      fill="none"
      viewBox="0 0 268 286"
      style={{ filter: "drop-shadow(0px 0px 40px rgba(143, 0, 210, 0.25))" }}
    >
      <g filter="url(#filter0_d_4954_5046)">
        <mask
          id="mask0_4954_5046"
          style={{ maskType: "alpha" }}
          width="190"
          height="206"
          x="39"
          y="40"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#D9D9D9" d="M39.75 40H228.25V246H39.75z"></path>
        </mask>
        <g mask="url(#mask0_4954_5046)">
          <path
            fill="#000"
            d="M118.832 198.488v-.5H40.944L149.168 41.601v89.463h77.887L118.832 287.451v-88.963z"
          ></path>
          <path
            fill="url(#paint0_linear_4954_5046)"
            d="M118.832 198.488v-.5H40.944L149.168 41.601v89.463h77.887L118.832 287.451v-88.963z"
          ></path>
          <path
            stroke="url(#paint1_linear_4954_5046)"
            d="M118.832 198.488v-.5H40.944L149.168 41.601v89.463h77.887L118.832 287.451v-88.963z"
          ></path>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_4954_5046"
          width="268.02"
          height="286"
          x="-0.01"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="20"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.560784 0 0 0 0 0 0 0 0 0 0.823529 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4954_5046"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_4954_5046"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_4954_5046"
          x1="134"
          x2="134"
          y1="40"
          y2="289.052"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C0C5E4" stopOpacity="0.157"></stop>
          <stop offset="0.5" stopColor="#BDC8FF" stopOpacity="0.09"></stop>
          <stop offset="1" stopColor="#36313C" stopOpacity="0.08"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_4954_5046"
          x1="39.99"
          x2="228.009"
          y1="164.526"
          y2="164.526"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0"></stop>
          <stop stopOpacity="0.2"></stop>
          <stop offset="0.5" stopColor="#8F8F8F" stopOpacity="0.67"></stop>
          <stop offset="1" stopOpacity="0.04"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const ArrowDown = ({ fill = "fill-gray-4", className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="4"
      viewBox="0 0 7 4"
      fill="none"
      className={className}
    >
      <path
        d="M0.760108 0L3.2345 2.47439L5.70889 0L6.469 0.765499L3.2345 4L0 0.765499L0.760108 0Z"
        className={fill}
      />
    </svg>
  );
};

export const Duplicate = ({ fill = "fill-gray-4" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
    >
      <path
        d="M12.5455 14.5455H4.54546V4.36364H12.5455M12.5455 2.90909H4.54546C4.15969 2.90909 3.78972 3.06234 3.51694 3.33512C3.24416 3.6079 3.09091 3.97787 3.09091 4.36364V14.5455C3.09091 14.9312 3.24416 15.3012 3.51694 15.574C3.78972 15.8468 4.15969 16 4.54546 16H12.5455C12.9312 16 13.3012 15.8468 13.574 15.574C13.8468 15.3012 14 14.9312 14 14.5455V4.36364C14 3.97787 13.8468 3.6079 13.574 3.33512C13.3012 3.06234 12.9312 2.90909 12.5455 2.90909ZM10.3636 0H1.63637C1.2506 0 0.88063 0.153246 0.60785 0.426027C0.33507 0.698807 0.181824 1.06878 0.181824 1.45455V11.6364H1.63637V1.45455H10.3636V0Z"
        className={fill}
      />
    </svg>
  );
};

export const Chat = ({ fill = "fill-gray-white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M16.2666 2.4V10.8H4.47063L3.06663 12.204V2.4H16.2666ZM17.4666 0H1.86663C1.54837 0 1.24314 0.126428 1.0181 0.351472C0.793054 0.576515 0.666626 0.88174 0.666626 1.2V18L5.46663 13.2H17.4666C17.7849 13.2 18.0901 13.0736 18.3152 12.8485C18.5402 12.6235 18.6666 12.3183 18.6666 12V1.2C18.6666 0.88174 18.5402 0.576515 18.3152 0.351472C18.0901 0.126428 17.7849 0 17.4666 0ZM23.4666 4.8H21.0666V15.6H5.46663V18C5.46663 18.3183 5.59305 18.6235 5.8181 18.8485C6.04314 19.0736 6.34837 19.2 6.66663 19.2H19.8666L24.6666 24V6C24.6666 5.68174 24.5402 5.37652 24.3152 5.15147C24.0901 4.92643 23.7849 4.8 23.4666 4.8Z"
        className={fill}
      />
    </svg>
  );
};

export const Document = ({ fill = "fill-gray-white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
    >
      <path
        d="M2.79996 0C2.16344 0 1.55299 0.252856 1.10291 0.702944C0.65282 1.15303 0.399963 1.76348 0.399963 2.4V21.6C0.399963 22.2365 0.65282 22.847 1.10291 23.2971C1.55299 23.7471 2.16344 24 2.79996 24H17.2C17.8365 24 18.4469 23.7471 18.897 23.2971C19.3471 22.847 19.6 22.2365 19.6 21.6V7.2L12.4 0H2.79996ZM2.79996 2.4H11.2V8.4H17.2V21.6H2.79996V2.4ZM5.19996 12V14.4H14.8V12H5.19996ZM5.19996 16.8V19.2H11.2V16.8H5.19996Z"
        className={fill}
      />
    </svg>
  );
};

export const Stars = ({ fill = "fill-gray-white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.6364 0L18.2618 3L15.2727 4.36364L18.2618 5.73818L19.6364 8.72727L21 5.73818L24 4.36364L21 3M8.72727 3.27273L6 9.27273L0 12L6 14.7273L8.72727 20.7273L11.4545 14.7273L17.4545 12L11.4545 9.27273M19.6364 15.2727L18.2618 18.2618L15.2727 19.6364L18.2618 21L19.6364 24L21 21L24 19.6364L21 18.2618"
        className={fill}
      />
    </svg>
  );
};

export const Close = ({ fill = "fill-gray-4" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
    >
      <path
        d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z"
        className={fill}
      />
    </svg>
  );
};

export const PassCheck = ({ fill = "fill-gray-white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM6.4 12L2.4 8L3.528 6.872L6.4 9.736L12.472 3.664L13.6 4.8L6.4 12Z"
        className={fill}
      />
    </svg>
  );
};

export const Compare = ({ fill = "fill-gray-4" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill="none"
    >
      <path
        d="M8.81809 1.09091H6.09082V2.18182H8.81809V9.27273L6.09082 6V10.9091H8.81809C9.10742 10.9091 9.3849 10.7942 9.58948 10.5896C9.79407 10.385 9.909 10.1075 9.909 9.81818V2.18182C9.909 1.57636 9.41809 1.09091 8.81809 1.09091ZM3.909 9.27273H1.18173L3.909 6M3.909 1.09091H1.18173C0.576275 1.09091 0.0908203 1.57636 0.0908203 2.18182V9.81818C0.0908203 10.1075 0.205755 10.385 0.41034 10.5896C0.614925 10.7942 0.892402 10.9091 1.18173 10.9091H3.909V12H4.99991V0H3.909V1.09091Z"
        className={fill}
      />
    </svg>
  );
};

// export const EnterKey = ({ fill = "fill-gray-4" }) => {
//   return (
//     <div className="flex-col w-[16px] h-[16px] justify-center items-center gap-[10px] rounded-sm border border-solid border-gray-3 bg-gray-2 shadow-key">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="8"
//         height="8"
//         viewBox="0 0 8 8"
//         fill="none"
//       >
//         <path
//           d="M7.65706 0V2.97143C7.65706 4.61257 6.32677 5.94286 4.68563 5.94286H2.09363L3.5062 7.35543L2.85706 8L0.342773 5.48571L2.85706 2.97143L3.50163 3.616L2.09363 5.02857H4.68563C5.82849 5.02857 6.74277 4.11429 6.74277 2.97143V0H7.65706Z"
//           className={fill}
//         />
//       </svg>
//     </div>
//   );
// };

export const AddMessage = ({ fill = "fill-gray-4" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M9 6.6H6.6V9H5.4V6.6H3V5.4H5.4V3H6.6V5.4H9M6 0C5.21207 0 4.43185 0.155195 3.7039 0.456723C2.97595 0.758251 2.31451 1.20021 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.31451 10.7998 2.97595 11.2417 3.7039 11.5433C4.43185 11.8448 5.21207 12 6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 5.21207 11.8448 4.43185 11.5433 3.7039C11.2417 2.97595 10.7998 2.31451 10.2426 1.75736C9.68549 1.20021 9.02405 0.758251 8.2961 0.456723C7.56815 0.155195 6.78793 0 6 0Z"
        className={fill}
      />
    </svg>
  );
};

export const RightArrow = ({ fill = "fill-gray-4" }) => {
  return (
    <svg
      width={13}
      height={12}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.8 5.24242C0.634315 5.24242 0.5 5.37674 0.5 5.54242L0.5 6.45758C0.5 6.62326 0.634315 6.75758 0.8 6.75758L8.86664 6.75758C9.13392 6.75758 9.26777 7.08072 9.07878 7.26971L5.63637 10.7121C5.51922 10.8293 5.51922 11.0192 5.63637 11.1364L6.28787 11.7879C6.40503 11.905 6.59497 11.905 6.71213 11.7879L12.2879 6.21213C12.405 6.09497 12.405 5.90503 12.2879 5.78787L6.71213 0.212132C6.59497 0.0949747 6.40503 0.0949748 6.28787 0.212132L5.63637 0.863626C5.51922 0.980783 5.51922 1.17073 5.63637 1.28789L9.07878 4.73029C9.26777 4.91928 9.13392 5.24242 8.86664 5.24242L0.8 5.24242Z"
        className={fill}
      />
    </svg>
  );
};
