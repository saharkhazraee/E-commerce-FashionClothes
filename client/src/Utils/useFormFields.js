// import { useState } from "react"

// const useFormFields=()=>{
//     const [fields,setFields]=useState({})
//     const handleChange=(e)=>{
//         let {target}=e
//         setFields({
//             ...fields,
//             [target.name]: target.value
//         })
//     }
//     return [fields,handleChange]
// }
// export default useFormFields

import { useState } from "react"

const useFormFields = (initialFormData) => {
    const [fields, setFields] = useState(initialFormData);

    const handleChange = (e) => {
        if (e.target) {
            // Handle standard input events (from <input>, <textarea>, etc.)
            const { target } = e;
            setFields({
                ...fields,
                [target.name]: target.value
            });
        } else {
            // Handle value changes from the Radix UI Select component
            const { name, value } = e;
            setFields({
                ...fields,
                [name]: value
            });
        }
    };

    return [fields, handleChange];
}

export default useFormFields;


{/* <Select name='category' onValueChange={(value) => handleChange({ name: 'category', value })}>
  <SelectTrigger className="w-[280px]">
    <SelectValue placeholder="Select a category" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="men">Men</SelectItem>
      <SelectItem value="women">Women</SelectItem>
      <SelectItem value="kids">Kids</SelectItem>
      <SelectItem value="accessories">Accessories</SelectItem>
      <SelectItem value="footwear">Footwear</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

<Select name='brand' value={fields.brand || ""} onValueChange={(value) => handleChange({ name: 'brand', value })}>
  <SelectTrigger className="w-[280px]">
    <SelectValue placeholder="Select a brand" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="nike">Nike</SelectItem>
      <SelectItem value="adidas">Adidas</SelectItem>
      <SelectItem value="puma">Puma</SelectItem>
      <SelectItem value="levi's">Levi's</SelectItem>
      <SelectItem value="zara">Zara</SelectItem>
      <SelectItem value="h&m">H&M</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select> */}

