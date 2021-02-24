import * as React from 'react'

const SvgComponent: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        d="M496.997,481.999c-387.768,0-384.894,0-481.997,0c-8.291,0-15,6.709-15,15c0,8.291,6.709,15,15,15h481.997
			c8.291,0,15-6.709,15-15C511.997,488.708,505.288,481.999,496.997,481.999z"
      />
      <path d="M136.999,332H45c-8.291,0-15,6.709-15,15v104.999h121.999V347C151.999,338.709,145.29,332,136.999,332z" />
      <path d="M286.998,242h-90c-8.291,0-15,6.709-15,15v194.999h119.999V257C301.998,248.709,295.289,242,286.998,242z" />
      <path
        d="M507.602,124.395L402.603,4.396c-5.859-5.859-15.352-5.859-21.211,0L276.392,124.395
			c-4.292,4.292-5.581,10.737-3.252,16.348c2.314,5.61,7.793,9.258,13.857,9.258h45v301.998h120V150.001h45
			c6.064,0,11.543-3.647,13.857-9.258C513.183,135.133,511.894,128.687,507.602,124.395z"
      />
    </svg>
  )
}

export default SvgComponent