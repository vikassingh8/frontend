const redColor = "#fc4747";
const grayishColor = "#5a698f";
export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={redColor}
      viewBox="0 0 32 26"
      fillRule="evenodd"
      clipRule="evenodd"
      width={"33"}
      height={"27"}
      className="transition hover:opacity-75 fill-primary"
    >
      <path d="m25.6 0 3.2 6.4H24L20.8 0h-3.2l3.2 6.4H16L12.8 0H9.6l3.2 6.4H8L4.8 0H3.2A3.186 3.186 0 0 0 .016 3.2L0 22.4a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V0h-6.4Z" />
    </svg>
  );
};
export const Home = ({ color = grayishColor }) => {
  return (
    <>
      <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
          fill={color}
        />
      </svg>
    </>
  );
};
export const Movies = ({ color = grayishColor }) => {
  return (
    <>
      <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
          fill={color}
        />
      </svg>
    </>
  );
};
export const Tv = ({ color = grayishColor }) => {
  return (
    <>
      <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
          fill={color}
        />
      </svg>
    </>
  );
};
export const Bookmark = ({ color = grayishColor }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-10 -9 38 38"
        fillRule="evenodd"
        clipRule="evenodd"
        className="h-[32px] w-[32px] cursor-pointer fill-none stroke-light stroke-[1.5] hover:stroke-dark active:fill-light"
      >
        <path
          d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82V18.52c0 .3-.086.572-.258.82a1.49 1.49 0 0 1-.694.541 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.482c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
          fill={color}
        />
      </svg>
    </>
  );
};
export const SearchButton = () => {
  return (
    <>
      <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
          fill="#FFF"
        />
      </svg>
    </>
  );
};
export const Play = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        fillRule="evenodd"
        clipRule="evenodd"
        className="h-[30px] w-[30px] fill-light"
        fill="white"
      >
        <path d="M0 15C0 6.713 6.713 0 15 0c8.288 0 15 6.713 15 15 0 8.288-6.712 15-15 15-8.287 0-15-6.712-15-15Zm21-.5L12 8v13l9-6.5Z" />
      </svg>
    </>
  );
};
export const icon = () => {
  return (
    <>
      <p>icon</p>
    </>
  );
};
