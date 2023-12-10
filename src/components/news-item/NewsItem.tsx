import news_elections from "@assets/Images/news-elections.svg";

type Props = {};

const NewsItem = (props: Props) => {
  return (
    <div className="flex flex-col col-span-1 space-y-2">
      <div className="flex border border-[#9747FF] rounded-tl-[50px] items-center content-center justify-center rounded-br-[50px] p-8">
        <img src={news_elections} alt="" className="h-60 w-60" />
      </div>
      <p className="font-bold text-slate-800">Elections to Academic Senate</p>
      <p className="text-slate-500 text-sm">
        Elections to Academic Senate Finance Faculty and Accounting Will Take
        Place on September
      </p>
      <p className="text-xs# text-slate-400">09.09.2023</p>
      <p className="text-[#9747FF] underline font-semibold text-sm">
        Read More
      </p>
    </div>
  );
};

export default NewsItem;
