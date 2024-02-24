import { footerBottomItem } from "../../Constants";

const FooterBottom = () => {
  return (
    <div className="w-full bg-footerBottom py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="w-full grid grid-col-3 md:grid-cols-5 xl:grid-cols-7 gap-3 place-content-center text-gray-400">
          {footerBottomItem.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <h3 className="footerBottomTitle">{item.title}</h3>
              <p className="w-24 tracking-tight text-[12px] text-[#999] group-hover:underline leading-3">
                {item.des.slice(0, 40)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
