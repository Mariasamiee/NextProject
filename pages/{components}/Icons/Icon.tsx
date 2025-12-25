export type IconName = "search" | "profile" | "cart" | "menu" | "Facebook" | "Youtube" | "Telegram" | "Twitter" | "search2" | "free" | "return" | "worldwide" | "policy" | "flash";

type IconsProps = {
    icon: IconName;
    className?: string;
}

const Icons = ({ icon, className }: IconsProps) => {
    switch (icon) {
        case "search":
            return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.58335 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58333C17.5 5.21108 13.9556 1.66667 9.58335 1.66667C5.2111 1.66667 1.66669 5.21108 1.66669 9.58333C1.66669 13.9556 5.2111 17.5 9.58335 17.5Z" stroke="#4B5563" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.3334 18.3333L16.6667 16.6667" stroke="#4B5563" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        case "profile":
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        case "cart":
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="#4B5563" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="#4B5563" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="#4B5563" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 8H21" stroke="#4B5563" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        case "menu":
            return <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="16" height="2" rx="1" fill="#4B5563" />
                <rect x="8" y="13" width="16" height="2" rx="1" fill="#4B5563" />
                <rect x="8" y="18" width="16" height="2" rx="1" fill="#4B5563" />
            </svg>

        case "Facebook":
            return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_22_1407)">
                    <path d="M11.5 19.8676V12.9412H13.8088L14.25 10.0588H11.5V8.20586C11.5 7.41174 11.8824 6.64704 13.1176 6.64704H14.3676V4.20586C13.6127 4.0784 12.8726 4.01468 12.1471 4.01468C9.88235 4.01468 8.39706 5.39704 8.39706 7.88233V10.0588H5.88235V12.9412H8.39706V19.8676C3.66176 19.1323 0.0294113 15.0147 0.0294113 10.0588C0.0294113 4.58821 4.47059 0.132324 9.95588 0.132324C15.4265 0.132324 19.8824 4.58821 19.8824 10.0588C19.8824 15.0147 16.25 19.1323 11.5 19.8676Z" fill="#4676ED" />
                    <path d="M11.5 12.9411V19.8676C11 19.946 10.4853 19.9852 9.95588 19.9852C9.42647 19.9852 8.90687 19.946 8.39706 19.8676V12.9411H5.88235V10.0588H8.39706V7.8823C8.39706 5.397 9.88235 4.01465 12.1471 4.01465C12.8725 4.01465 13.6128 4.07837 14.3676 4.20583V6.647H13.1176C11.8824 6.647 11.5 7.41171 11.5 8.20582V10.0588H14.25L13.8088 12.9411H11.5Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_22_1407">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        case "Youtube":
            return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_22_1414)">
                    <path d="M19.9135 9.92C19.9135 15.387 15.4752 19.84 9.99348 19.84C4.51176 19.84 0.0734787 15.387 0.0734787 9.92C0.0734787 4.43828 4.51176 0 9.99348 0C15.4752 0 19.9135 4.43828 19.9135 9.92Z" fill="#DA0000" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6068 9.9201C16.6068 11.3505 16.5138 12.4087 16.3276 13.0945C16.1806 13.6677 15.725 14.1085 15.1666 14.2702C14.471 14.4564 12.7466 14.5494 9.99348 14.5494C7.24038 14.5494 5.51601 14.4564 4.82039 14.2702C4.26193 14.1085 3.80634 13.6677 3.65938 13.0945C3.47324 12.4087 3.38015 11.3505 3.38015 9.9201C3.38015 8.47987 3.47324 7.41684 3.65938 6.73101C3.80634 6.15785 4.26193 5.71696 4.82039 5.5553C5.51601 5.37895 7.24038 5.29077 9.99348 5.29077C12.7466 5.29077 14.471 5.37895 15.1666 5.5553C15.725 5.71696 16.1806 6.15785 16.3276 6.73101C16.5138 7.41684 16.6068 8.47987 16.6068 9.9201ZM12.1097 9.9201L8.67082 7.93611V11.9041L12.1097 9.9201Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_22_1414">
                        <rect width="19.987" height="19.84" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        case "Telegram":
            return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_22_1421)">
                    <path d="M9.97059 19.8822C4.5 19.8822 0.0441132 15.4264 0.0441132 9.95577C0.0441132 4.47047 4.5 0.0292969 9.97059 0.0292969C15.4559 0.0292969 19.8971 4.47047 19.8971 9.95577C19.8971 15.4264 15.4559 19.8822 9.97059 19.8822Z" fill="url(#paint0_linear_22_1421)" />
                    <path d="M6.80883 9.83818L13.3677 6.76465L10.75 11.7941C9.19118 13.4215 8.35784 14.2352 8.25 14.2352C8.14217 14.2352 8.03922 14.1372 7.94118 13.9411L6.76471 10.6764L6.80883 9.83818Z" fill="#C8DAEA" />
                    <path d="M10.1912 12.6029C9.72059 12.9852 9.24019 13.4215 8.75 13.9117C8.25981 14.4019 8.04412 14.4019 8.10294 13.9117L8.32353 11.5146L10.1912 12.6029Z" fill="#A9C6D8" />
                    <path d="M6.79412 10.7941L4.36765 10C4.17157 9.92157 4.10784 9.79413 4.17647 9.61766C4.19118 9.55883 4.23529 9.5147 4.33823 9.44117C4.70098 9.18627 8.01471 7.93138 14.2794 5.67648C14.4559 5.61765 14.598 5.60785 14.7059 5.64707C14.7794 5.67648 14.8235 5.70589 14.8529 5.82354C14.8676 5.86765 14.8824 5.95589 14.8824 6.04413C14.8824 6.10295 14.8676 6.16177 14.8676 6.25001C14.8284 6.86765 14.2353 9.4706 13.0882 14.0588C13.0294 14.3333 12.8774 14.4755 12.6324 14.4853C12.4853 14.4853 12.3235 14.4559 12.1324 14.2941C11.4118 13.6765 8.92647 12 8.36765 11.6324C8.33823 11.6029 8.33823 11.5882 8.32353 11.5588C8.32353 11.5294 8.33823 11.5 8.36765 11.4706C11.2598 8.90196 12.7402 7.48039 12.8088 7.20589C12.8235 7.17648 12.7941 7.16177 12.75 7.17648C12.4559 7.27942 7.47059 10.4412 6.91176 10.7794C6.89216 10.799 6.85294 10.8039 6.79412 10.7941Z" fill="white" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_22_1421" x1="-0.250004" y1="19.8822" x2="-0.250004" y2="0.0292969" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1D93D2" />
                        <stop offset="1" stop-color="#38B0E3" />
                    </linearGradient>
                    <clipPath id="clip0_22_1421">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        case "Twitter":
            return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_22_1430)">
                    <path d="M19.9706 10.0588C19.9706 15.5441 15.5294 19.9853 10.0441 19.9853C4.57353 19.9853 0.117645 15.5441 0.117645 10.0588C0.117645 4.58821 4.57353 0.132324 10.0441 0.132324C15.5294 0.132324 19.9706 4.58821 19.9706 10.0588Z" fill="#5A99EC" />
                    <path d="M4 14.6028C4.20588 14.6224 4.41666 14.6323 4.63235 14.6323C5.86765 14.6323 7 14.2205 7.91176 13.4999C6.75 13.4852 5.77941 12.7205 5.44118 11.6764C5.59804 11.7058 5.76471 11.7205 5.94118 11.7205C6.17647 11.7205 6.40685 11.6911 6.63235 11.6323C5.42647 11.3823 4.51471 10.3234 4.51471 9.04402C4.51471 9.03421 4.51471 9.0244 4.51471 9.01461C4.86765 9.20578 5.27941 9.32343 5.70588 9.33814C5 8.86755 4.54412 8.05872 4.54412 7.14696C4.54412 6.66166 4.67647 6.22049 4.89706 5.82343C6.19118 7.41166 8.13235 8.47049 10.3235 8.57343C10.2843 8.38715 10.2647 8.18618 10.2647 7.97049C10.2647 6.51461 11.4412 5.33813 12.8971 5.33813C13.6618 5.33813 14.3382 5.66166 14.8235 6.17637C15.4265 6.05872 15.9853 5.83813 16.5 5.52931C16.2941 6.14696 15.8824 6.66166 15.3382 6.98519C15.8676 6.92637 16.3824 6.79402 16.8529 6.57343C16.5 7.10284 16.0441 7.57343 15.5294 7.94108C15.5393 8.05872 15.5441 8.17146 15.5441 8.27931C15.5441 11.7646 12.8971 15.7793 8.04412 15.7793C6.55882 15.7793 5.16176 15.3528 4 14.6028Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_22_1430">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        case "search2":
            return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.58332 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58332C17.5 5.21106 13.9556 1.66666 9.58332 1.66666C5.21106 1.66666 1.66666 5.21106 1.66666 9.58332C1.66666 13.9556 5.21106 17.5 9.58332 17.5Z" stroke="#F8FAFC" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.3333 18.3333L16.6667 16.6667" stroke="#F8FAFC" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        case "free":
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14H13C14.1 14 15 13.1 15 12V2H6C4.5 2 3.19001 2.82999 2.51001 4.04999" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 8H8" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 11H6" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 14H4" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


        case "return":
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.7 4.44995L17.6799 6.74994L21.6199 4.45996" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.6799 10.82V6.73999" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.74 2.21L14.34 3.53996C13.8 3.83996 13.35 4.59995 13.35 5.21995V7.75999C13.35 8.37999 13.79 9.13998 14.34 9.43998L16.74 10.77C17.25 11.06 18.09 11.06 18.61 10.77L21.01 9.43998C21.55 9.13998 22 8.37999 22 7.75999V5.21995C22 4.59995 21.56 3.83996 21.01 3.53996L18.61 2.21C18.1 1.93 17.26 1.93 16.74 2.21Z" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.34998 15.45L6.31998 17.7499L10.27 15.46" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.31995 21.82V17.74" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.39 13.21L2.99001 14.54C2.45001 14.84 2 15.5999 2 16.2199V18.76C2 19.38 2.44001 20.14 2.99001 20.44L5.39 21.77C5.9 22.06 6.73999 22.06 7.25999 21.77L9.66 20.44C10.2 20.14 10.65 19.38 10.65 18.76V16.2199C10.65 15.5999 10.21 14.84 9.66 14.54L7.25999 13.21C6.73999 12.93 5.9 12.93 5.39 13.21Z" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        case "worldwide":
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        case "policy":
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 7.5V16.5" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17 3V7H21" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 2L17 7" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        case "flash":
            return <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.339 4.07998L8.56698 0.159979C8.47108 0.0533123 8.34855 -2.09808e-05 8.19937 -2.09808e-05C8.05019 -2.09808e-05 7.92766 0.0506458 7.83176 0.151979C7.73586 0.253312 7.68791 0.375979 7.68791 0.519979C7.68791 0.66398 7.73586 0.789312 7.83176 0.895979L10.7567 3.93598H0.511462C0.372941 3.93598 0.253067 3.98665 0.15184 4.08798C0.0506134 4.18931 0 4.31198 0 4.45598C0 4.59998 0.0506134 4.72531 0.15184 4.83198C0.253067 4.93865 0.372941 4.99198 0.511462 4.99198H10.7567L7.83176 8.01598C7.73586 8.12265 7.68791 8.24798 7.68791 8.39198C7.68791 8.53598 7.73852 8.66131 7.83975 8.76798C7.94097 8.87465 8.06085 8.92798 8.19937 8.92798C8.33789 8.92798 8.46043 8.87465 8.56698 8.76798L12.339 4.83198C12.4456 4.72531 12.4988 4.60531 12.4988 4.47198C12.4988 4.33865 12.4456 4.20798 12.339 4.07998Z" fill="#4B5563" />
            </svg>

        default:
            return null;
    }
}

export default Icons
