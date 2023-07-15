import { Fragment } from "react"

import "./abtDataMain.component.css"


const AbtMain = ({abtData}) => {
    return (
      <Fragment>
        <div className='abt_sec_main'>
          .{/* {console.log(abtData)} */}
          <div className='abt_sec_main_heading about_section_header'>
            <h1>MORE ABOUT PEER MENTORING PROGRAM</h1>
          </div>
          {abtData.map((cur, i) => {
            return cur.dataId === "main" ? (
              <div className='abt_main_container'>
                <div className='info_blocks'>
                  <div className='abt_img_container'>
                    <img src={cur.imgSrc} alt='' />
                  </div>
                  <div className='info_block_content'>
                    <h1 className='info_block_cnt__heading heading'>
                      {cur.heading}
                    </h1>
                    
                      <p className='info_block_cnt__quote'>
                        {cur.quote}
                      </p>


                    <p className='info_block_cnt_data'>{cur.content}</p>
                  </div>
                </div>
              </div>
            ) : // console.log(cur.dataId)
            null;
          })}
        </div>
      </Fragment>
    );
}

export default AbtMain;