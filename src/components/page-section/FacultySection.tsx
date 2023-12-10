import FacultyComponent from '@components/faculty-component/FacultyComponent'
import { data } from '@utils/data'

const FacultySection = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 ">
    <div className=" bg-[#F4F7FC] rounded-tl-[100px] flex flex-col space-y-2 rounded-br-[100px] p-16">
      <p className="text-slate-900 font-bold text-3xl">
        Choose your Faculty
      </p>
      <p className="text-sm font-medium text-slate-500">
        Faculties offering applicants
      </p>
      <div className="grid grid-cols-2 py-16 gap-16">
        {data.faculties.map((item, index) => (
          <FacultyComponent
            image={item.image}
            features={item.features}
            heading={item.heading}
          />
        ))}
      </div>
    </div>
  </div>
  )
}

export default FacultySection