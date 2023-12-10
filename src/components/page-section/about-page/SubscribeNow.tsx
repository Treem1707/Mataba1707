import subscribe_picture from "@assets/about-page/suscribe-picture.svg";


type Props = {}

const SubscribeNow = (props: Props) => {
  return (
    <div className="flex bg-slate-50 w-full py-16">
    <div className="max-w-7xl w-full mx-auto px-4">
      <div className="border flex flex-row rounded-tl-[40px] rounded-br-[40px] border-[#9747FF] divide-x-[1px] divide-[#9747FF]">
        <div className="p-8 flex-1 items-center justify-center content-center flex">
          <img src={subscribe_picture} className="h-80" alt="" />
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <p className="text-sm font-medium text-pink-600">
            OUR PROFESSIONALS
          </p>
          <p className="max-w-xs text-3xl text-slate-900 font-bold">
            Subscribe for Education Insights!
          </p>
          <div className="flex flex-row items-center pt-16">
            <input
              type="email"
              className="py-3 px-4 flex-1 rounded-l-full text-sm font-medium bg-[#E5D8FD]"
              placeholder="Email"
            />
            <div className="flex uppercase text-sm font-medium bg-pink-600 text-white rounded-r-full py-3 px-4">
              SUBSCRIBE NOW
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SubscribeNow