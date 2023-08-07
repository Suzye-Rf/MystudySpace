import { Empty, Input, Popover } from 'antd'
import { useState } from 'react'

const { Search } = Input
const Searching = () => {
  const [search, setSearch] = useState('搜索')

  const onSearch = () => {}

  return (
    <Popover trigger={'focus'} content={<Empty/>}>
      <Search
      placeholder={search}
      onSearch={onSearch}
      onFocus={() => setSearch('别搜了吧? 啥也没有欸! ')}
      onBlur={() => setSearch('搜索')}
      style={{ flexGrow: 1 }}
      />
    </Popover>
    
  )
}

export default Searching
