import { Typography } from '@/components/commons/Typography'
import { SearchIcon, ArrowRightLeft } from '@/components/icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface IProps {
  className?: string
  labelClassName?: string
}

export const SearchInput = ({ className, labelClassName }: IProps) => {
  const [query, setQuery] = useState<string>('')
  const navigate = useNavigate()

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(ev.target.value.toLowerCase().trim())
  }

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if (query.length >= 2) {
      navigate(`/pokemon/${query}`)
      setQuery('')
    }
  }

  return (
    <form autoComplete="off" className={`${className}`} onSubmit={handleSubmit}>
      <label htmlFor="name" className={`${labelClassName}`}>
        <Typography>Search for a pokemon by name or id</Typography>
      </label>
      <div className="flex justify-between items-center gap-2 mt-4 bg-lightGray px-3 py-1 rounded-md">
        <button type="submit" data-testid="search-button">
          <SearchIcon className="w-5 h-5 text-blueDark" />
        </button>
        <input
          aria-placeholder="pikachu"
          value={query}
          onChange={handleChange}
          autoFocus
          style={{ background: 'none' }}
          type="text"
          name="name"
          id="name"
          placeholder="pikachu"
          className="flex-1 outline-none bg-sky-700 text-blueDark"
        />
        <button className="bg-blueDark p-1 rounded text-white" type="submit">
          <ArrowRightLeft className="w-5 h-5" />
        </button>
      </div>
    </form>
  )
}
