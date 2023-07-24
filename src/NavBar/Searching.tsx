import { Input } from "antd"
import { useState } from "react"

const { Search } = Input
const Searching = () => {
  const [search, setSearch] = useState('')

  const onSearch = () => {}

  return (
    <Search placeholder="搜索" onSearch={onSearch} style={{ flexGrow: 1 }} />
  )
}

export default Searching