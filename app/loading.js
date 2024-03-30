import { FaSpinner } from "react-icons/fa"

const loading = () => {
  return (
    <div className="min-h-screen grid place-items-center">
        <FaSpinner className="text-5xl animate-spin" />
    </div>
  )
}

export default loading