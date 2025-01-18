import React from "react";

interface Program {
  url: string;
  name: string;
  time: string;
  img: string;
  lang: string[];
  desc: string;
}

interface Props {
  data: Program[];
}

const ProgramList: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data.map((program, index) => (
        <a key={index} href={program.url} target="_blank" rel="noopener noreferrer">
          <div className="prg_div">
            <div className="padding_0">
              <span className="name_prg">{program.name}</span>
              <br />
              <span className="time_prg">{program.time}</span>
              <br />
              <br />
              <img src={program.img} alt={program.name} className="img_prg" />
              <br />
              <br />
              <div
                className="desc_prg"
                dangerouslySetInnerHTML={{ __html: program.desc }}
              ></div>
              <br />
              <div className="lang_div">
                {program.lang.map((language, idx) => (
                  <span key={idx} className="lang_tag">
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProgramList;
