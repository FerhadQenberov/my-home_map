import React from "react";

const Info = () => {
  return (
    <>
      <div className="bg-[#D6EBFF] mt-8 text-[#1E90FF] font-normal text-[14px] w-[721px] h-[146px] p-4 leading-4">
        <ul className="font-normal text-[14px]">
          <li>
            - Ən azı 3 şəkil yüklənməlidir. (Ön, arxa və bütün görünüş
            mütləqdir.)
          </li>
          <li>- 20-yə qədər şəkil yükləyə bilərsiniz.</li>
          <li className="flex items-center">
            <img
              src="/formIcon/info_vector.svg"
              alt="vector"
              width={20}
              height={20}
             
            />
            - Yüklənəcək şəkillərin ölçüsü optimal olaraq ən azı 1024x768 piksel
            olmalıdır.
          </li>
          <li>
            - Şəkillər keyfiyyətli olmalıdır. Şəkillərdə loqo və ya nişanlar
            olmamalıdır.
          </li>
          <li>- Ekran görüntüləri qəbul edilmir.</li>
        </ul>
      </div>
    </>
  );
};

export default Info;
