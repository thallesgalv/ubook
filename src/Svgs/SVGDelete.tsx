interface SVGDeleteProps {
  fill: string
}

const SVGDelete = ({ fill }: SVGDeleteProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <g fill={fill} fillRule="nonzero">
        <path d="M13.881 1.627h-3.808c-.03-.339-.134-.91-.492-1.277A1.147 1.147 0 0 0 8.73 0H6.017c-.34 0-.626.118-.853.35-.357.366-.461.938-.491 1.277H1.407a.271.271 0 1 0 0 .542H13.88a.271.271 0 1 0 0-.542zm-8.663 0c.03-.284.118-.677.336-.9a.614.614 0 0 1 .463-.185h2.712c.19 0 .341.06.463.185.218.223.306.616.336.9h-4.31zM2.48 14.65c.01.467.3 1.35 1.33 1.35h7.668c1.03 0 1.32-.883 1.33-1.345l.497-11.943H1.983L2.48 14.65zm1.91-3.26h6.508a.271.271 0 1 1 0 .542H4.39a.271.271 0 1 1 0-.542zm0 1.356h6.508a.271.271 0 1 1 0 .542H4.39a.271.271 0 1 1 0-.542zm0 1.356h6.508a.271.271 0 1 1 0 .542H4.39a.271.271 0 1 1 0-.542z" />
      </g>
    </svg>
  )
}

export default SVGDelete
