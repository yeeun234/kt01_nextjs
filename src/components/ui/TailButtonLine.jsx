

export default function TailButtonLine({ html, bgColor, onClick }) {

  const boarderCo = {
    "orange": "border-orange-300",
    "blue": "border-blue-300",
    "n": "bg-white-300",
  }
  const bgCo = {
    "orange": "bg-orange-100",
    "blue": "bg-blue-100",
    "n": "bg-white",
  }

  return (
    <div className='flex  h-full justify-center items-center '>
      <button className={`p-2 m-1 border border-solid ${boarderCo[bgColor]} ${bgCo[bgColor]} rounded-md ${bgColor !== "n" && "hover:font-bold"}`} onClick={onClick}>
        {html}
      </button>
    </div>
  )
}
