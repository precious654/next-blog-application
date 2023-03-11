import { Montserrat } from "@next/font/google";

const montserrat = Montserrat(
    {
        subsets: ['latin'],
        weight: ['400']
    }
)

interface data{
    text: string
}

function Button(props: data) {
  return (
    <button className={montserrat.className}>
      {props.text}
    </button>
  )
}

export default Button;