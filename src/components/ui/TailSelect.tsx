import { RefObject ,ChangeEvent } from 'react'

interface TailSelectProps { id:string; optionArray:string[]; selectRef:RefObject<HTMLSelectElement |null>; handleChange?: (e:ChangeEvent<HTMLSelectElement>)=>void; }

export default function TailSelect({ id, selectRef, handleChange , optionArray }:TailSelectProps) {
    return (
        <div>
            <select id={id} ref={selectRef} onChange={handleChange} className="mb-2 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                 {
                optionArray.map((item:string,idx:number) => {
                    return <option value={item} key={item+idx}>{item}</option>
                })}
            </select>
        </div>
    )
}
