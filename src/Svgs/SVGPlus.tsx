interface SVGPlusProps {
  fill: string
}

const SVGPlus = ({ fill }: SVGPlusProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <path
        fill={fill}
        fillRule="nonzero"
        d="M16 7.238H8.762V0H7.238v7.238H0v1.524h7.238V16h1.524V8.762H16z"
      />
    </svg>
  )
}

export default SVGPlus