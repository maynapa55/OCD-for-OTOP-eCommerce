import React from "react";

export default function Blogpost1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              Post Title
              <small>Subheading</small>
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Blog Home 2</li>
            </ol>
          </div>
          <div className="row">
            {/* Post Content Column */}
            <div className="col-lg-8">
              {/* Preview Image */}
              <img
                className="img-fluid rounded"
                src="images/blog-item-01.jpg"
                alt=""
              />
              <hr />
              {/* Date/Time */}
              <p>โพสต์เมื่อวันที่ 18 ธันวาคม 2567 โดยนภาพร อินเคน</p>
              <hr />
              {/* Post Content */}
              <p className="lead">แนวคิดปรัชญากับการพัฒนาองค์การ</p>
              <p>
                แนวคิดปรัชญากับการพัฒนาองค์การ ได้แก่{" "}
                <ul className="ml-4" style={{listStyleType: "lower-alpha"}}>
                  <li>
                    1.การกำหนดรูปแบบในการพัฒนาองค์การ การกำหนดเป้าหมาย
                    และตัวชี้วัดให้ชัดเจน (KPI)
                  </li>
                  <li>2.มีแนวคิดเชิงบวกเกี่ยวกับองค์การ</li>
                  <li>3.มีที่ปรึกษาด้านการพัฒนาองค์การ</li>
                </ul>
              </p>
              <p className="lead"> การพัฒนาองค์การคืออะไร</p>
              <p>
                การพัฒนาองค์การคือ
                <ul className="ml-4"style={{listStyleType: "upper-alpha"}}>
                  <li>1.การพัฒนาองค์การคืออะไร</li>
                  <li>2.นำไปปฏิบัติทั่วทั้งองค์การ</li>
                  <li>3.บริหารโดยผู้บริหารระดับสูง</li>
                  <li>
                    4.เพื่อเพิ่มประสิทธิผลและความสามารถขององค์การ
                    เป็นการเปลี่ยนแปลงกระบวนการขององค์การ
                  </li>
                  <li>
                    5.กิจกรรมพัฒนาองค์การที่วางแผนไว้ (Planned Intervention)
                    และสอดคล้องกับองค์ความรู้ด้านพฤติกรรมศาสตร์ (Behavioral
                    Science)
                  </li>
                  <li>
                    6.กระบวนการเปลี่ยนแปลงวัฒนธรรมองค์การตามที่วางแผนไว้
                    ด้วยการประยุกต์ใช้เทคโนโลยี งานวิจัย และทฤษฎี Behavioral
                    Sciences
                  </li>
                  <li>
                    7.กิจกรรมพัฒนาองค์การที่วางแผนล่วงหน้า และอยู่บนพื้นฐานของ
                    Behavioral Sciences โดยมุ่งที่การปรับปรุงการทำงานขององค์การ
                    และการพัฒนาบุคคล
                  </li>
                  <li>
                    8.การเปลี่ยนแปลงวัฒนธรรม
                    เทคโนโลยีและการจัดการทั่วทั้งองค์การ
                    หรืออย่างน้อยมีหน่วยงานเกิดการเปลี่ยนแปลง
                  </li>
                  <li>
                    9.ระบบการวางแผนลยุทธ์ด้าน Behavioral Science สร้างความเข้าใจ
                    ในพัฒนาและเปลี่ยนแปลงองค์การ เพื่อปรับปรุงประสิทธิผล
                    และความสามารถขององค์การทั้งในปัจจุบันและอนาคต
                  </li>
                </ul>
              </p>
              <p className="lead">OD มีรากฐานมาจากอะไร</p>
              <p>
                OD ได้รับอิทธิพลองค์ความรู้มาจากศาสตร์ที่หลากหลาย ได้แก่
                <ul className="ml-4"style={{ listStyleType: "upper-roman"}}>
                  <li>1.จิตวิทยาสังคม (Social Psychology)</li>
                  <li>2.กระบวนการกลุ่ม (Group Dynamics)</li>
                  <li>
                    3.จิตวิทยาอุตสาหกรรมและองค์การ (Industrial and Organization
                    Psychology)
                  </li>
                  <li>
                    4.ทฤษฎีการจัดการแบบมีส่วนร่วม (Participative Management
                    Theory)
                  </li>
                  <li>5.พฤติกรรมองค์การ (Organization Behavior)</li>
                  <li>6.สังคมวิทยา (Sociology)</li>
                  <li>7.จิตบำบัด (Psychotherapy)</li>
                </ul>
              </p>
              <p className="lead">ธรรมชาติของ OD คืออะไร</p>
              <p>
                ธรรมชาติของ OD (The Nature of OD)ได้แก่
                <ul className="ml-4" style={{ listStyleType: "lower-roman"}}>
                  
                </ul>
                <li>
                  1.OD เกี่ยวข้องศาสตร์หลายแขนง โดยมี Behavioral Sciences
                  เป็นแกนกลางหรือแกนหลัก
                </li>
                <li>2.เป้าหมายหลักของ OD คือปรับปรุงประสิทธิผลขององค์การ</li>
                <li>
                  3.ขอบเขตของการทำ OD คือทำทั่วทั้งระบบ ได้แก่ ฝ่าย แผนก กลุ่ม
                  บุคคล ชุมชน ประเทศ ภูมิภาค
                </li>
                <li>4.OD ตระหนักถึงความมุ่งมั่น สนับสนุน และการมีส่วนร่วม</li>
                <li>5.OD กลยุทธ์ระยะยาวที่องค์การได้วางแผนไว้</li>
                <li>6.OD ให้ความสำคัญกับระบบทั้งระบบ และองค์ประกอบของระบบ</li>
                <li>7.OD ต้องอาศัยความร่วมมือจากบุคคลต่างๆ</li>
                <li>
                  8. OD คือกิจกรรมบนพื้นฐานทางวิชาการ ที่ออกแบบสำหรับการพัฒนา
                  <ul className="ml-5"style={{ listStyleType: "square" }}>
                    <li>ค่านิยม (Values)</li>
                    <li>ทัศนคติ (Attitudes)</li>
                    <li>บรรทัดฐาน (Norms)</li>
                    <li>วิธีการบริหารจัดการ (Management Practices)</li>
                  </ul>
                </li>
                <li>
                  9. ผู้มีบทบาทสำคัญในการทำ OD{" "}
                  <ul className="ml-5" style={{ listStyleType: "circle"}}>
                    <li>ทีมงาน/คณะกรรมการดำเนินโครงการ OD</li>
                    <li>ผู้จัดการฝ่ายต่างๆ (Line Manager)</li>
                    <li>ผู้อำนวยการความสะดวก (Facilitator)</li>
                    <li>อาจารย์ (Teacher)</li>
                    <li>ผู้ฝึกสอน (Coach)</li>
                  </ul>
                </li>
                <li>10. OD ให้ความสำคัญกับการติดตามผลตามที่วางแผนไว้ (Planned Follow-up)</li>
                <li>11.OD เกี่ยวข้องกับการเปลี่ยนแปลง หรือปรับปรุงกระบวนการ หรือโครงสร้างขององค์การ
</li>
              </p>
              <p className="lead">ลักษณะสำคัญของ OD</p>
              <p>ลักษณะสำคัญของการพัฒนาองค์กร  มีดังนี้
                <ul className="ml-4"></ul>
                <li>1.OD เกี่ยวข้องกับการเปลี่ยน แปลงกลยุทธ์ โครงสร้างและหรือกระบวนการของระบบท้้งระบบมีความหมายครอบคลุมตั้งแต่องค์การ ฝ่ายหรือกลุ่มงาน</li>
                <li>2.OD เป็นการประยุกต์ใช้และถ่ายทอดความรู้และวิธีปฏิบัติด้าน Behavioral Science ให้กับสมาชิกขององค์การ เช่น ภาวะผู้นำ กระบวนการกลุ่ม การออกแบบงาน กลยุทธ์ รูปแบบองค์การ ความสัมพีนธืระหว่างประเทศ</li>
                <li>3.OD เกี่ยวข้องกับการจัดการการเปลี่ยนแปลงตามที่วางแผนไว้</li>
                <li>4.OD เกี่ยวข้องกับการสร้างและส่งเสริมการเปลี่ยนแปลงให้ดำรงอยู่ต่อไป</li>
                <li>5.OD มุ่งปรับปรุงประสิทธิผลขององค์การ</li>
              </p>
              <p className="lead">การพัฒนา OD </p>
              <p>การพัฒนา OD จะต้องอยู่บนรากฐานของความรู้และค่านิยม ดังนี้
                <ul className="ml-4"></ul>
                <li>
                1.ความเข้าใจในระบบสังคม (Understanding social systems) คือต้องเข้าใจในศาสตร์ที่เกี่ยวข้องกับการพัฒนาและเปลี่ยนแปลงองค์การ เช่น {" "}
                  <ul className="ml-4" style={{ listStyleType: "circle"}}>
                    <li>จิตวิทยา</li>
                    <li>จิตวิทยาสังคม</li>
                    <li>สังคมวิทยา</li>
                    <li>รัฐศาสตร์</li>
                    <li>เศรษฐศาสตร์</li>
                    <li>ปรัชญา ศาสนา ฟิสิกส์และชีววิทยา เป็นต้น</li>
                  </ul>
                </li>
                <li>2.เข้าใจในวิธีการและสาเหตุของการเปลี่ยนแปลง</li>
                <li>3.เข้าใจบทบาทบุคคลที่สาม (Third Party) ของที่ปรึกษาด้านการเปลี่ยนแปลง บุคคลที่ไม่มีส่วนได้ส่วนเสีย เป็นที่ปรึกษาด้านการเปลี่ยนแปลงและการพัฒนาองค์การ</li>
              </p>
              <p className="lead">ค่านิยมของ OD (OD Values)</p>
              <p>ค่านิยมของ OD มีดังนี้
                <ul className="ml-4"></ul>
                <li>1.การส่งเสริมศักดิ์ศรีแห่งความเป็นมนุษย์ (State of Human Dignity) </li>
                <li>2.การยึดมั่นในคุณค่าของมนุษย์ (Humanistically Oriented) </li>
                <li>3.ความเท่าเทียม (Democracy)</li>
                <li>4.ความสุจริต (Honesty)</li>
                <li>5.การกระจายอำนาจ (Empowerment)</li>
                <li>6.ค้นหาปัญหาและเป็นวิทยาศาสตร์ (Inquiry and Sciences)</li>
                <li>7.มีจิตช่วยเหลือ (Being Helpful)</li>
              </p>
              <p className="lead">สรุปค่านิยมของ OD </p>
              <p>สรุปค่านิยมของ OD ที่สำคัญ ได้แก่
                <ul className="ml-4"></ul>
                <li>1.การให้ความเคารพและการมีส่วนร่วม (Respect and Inclusion) </li>
                <li>2.การให้ความร่วมมือ (Collaboration) </li>
                <li>3.ความจริงใจ (Authenticity)</li>
                <li>4.ความเข้าใจในตนเอง (Self-awareness)</li>
                <li>5.การกระจายอำนาจ (Empowerment)</li>
                <li>6. ประชาธิปไตยและความเป็นธรรมในสังคม (Democracy and Social Justice)</li>
              </p>
              <p className="lead">ข้อแตกต่างระหว่าง OD กับ Change Management (CM) </p>
              <p>ข้อแตกต่างระหว่าง OD กับ Change Management (CM)ได้แก่
              <ul className="ml-5" style={{ listStyleType: "circle"}}></ul>
                <li>1.OD ทำให้องค์การตระหนักและสร้างการเรียนรู้ผ่านกระบวนการแก้ไขปัญหาหลัก 
                  ส่วน CM ประยุกต์วิธีการแก้ปัญหาอย่างมีเหตุผลในการทำให้เป้าหมายที่ต้องการบรรลุผล</li>
                <li>2.OD มุ่งไปที่พลวัตของระบบในองค์การ ซึ่งเปิดพื้นที่ให้องค์การวิจัย สะท้อนและทบทวนรูปแบบของระบบที่ดำรงอยู่เวลานั้น
                ส่วน CM มุ่งไปที่ผลลัพธ์มากกว่า</li>
                <li>3.OD ตั้งอยู่บนความร่วมมือระหว่างองค์การและที่ปรึกษาด้านพัฒนาองค์การในการกำหนดกระบวนการที่เกี่ยวข้อง
                ส่วน CM เน้นที่บทบาทของผู้เชี่ยวชาญหรือผู้ที่แก้ปัญหาได้อย่างเบ็ดเสร็จ</li>
                <li>4.OD แก้ปัญหากระบวนการต่างๆ ที่ไม่ปรากฏชัดเจน เช่น การเปลี่ยนแปลงที่เกี่ยวข้องกับอำนาจ เชื้อชาติ เพศและสถานะทางสังคม และการอยู่ท่ามกลางแรงกดดันอื่นๆ ทางสังคม
                ส่วน CM จัดการกับการเปลี่ยนแปลงที่ปรากฏอย่างชัดเจนของสถานการณ์หนึ่งๆ </li>
              </p>
              <p className="lead">สรุปความแตกต่างระหว่าง OD และ Change Management (CM) </p>
              <p>สรุปความแตกต่างระหว่าง OD กับ Change Management (CM)ได้แก่
                <ul className="ml-4"></ul>
                   1.OD 
                  <ul className="ml-4" style={{ listStyleType: "circle"}}>
                    <li>-การเปลี่ยนแปลงเพื่อเพิ่มความสามารถของบุคลากร </li>
                    <li>-การเปลี่ยนแปลงตามที่วางแผนไว้ล่วงหน้า และยึดหลักการของ OD</li>
                    </ul>
                <ul className="ml-4"></ul>
                   ส่วนCM
                  <ul className="ml-4" style={{ listStyleType: "circle"}}>
                    <li>-การเปลี่ยนแปลงเพื่อเพิ่มมูลค่าทางเศรษฐกิจ </li>
                    <li>-เป็นไปเพื่อผลทางการตลาด และไม่ได้ยึดหลักการของ OD</li>
                    </ul>
                   2.OD 
                  <ul className="ml-4" style={{ listStyleType: "circle"}}>
                    <li>-ส่งเสริมศักยภาพ ความมีส่วนร่วม และการพัฒนามนุษย์พร้อมๆ 
                      กับเพิ่มผลประกอบการ และการสร้างการได้เปรียบเชิงแข่งขัน</li>
                    <li>-ถ่ายทอดความรู้ และทักษะเพื่อช่วยให้ระบบมีความสามารถในการจัดการการเปลี่ยนแปลงในอนาคต</li>
                    </ul>
                <ul className="ml-4"></ul>
                   ส่วนCM
                  <ul className="ml-4" style={{ listStyleType: "circle"}}>
                    <li>-มุ่งที่ต้นทุน คุณภาพและตารางการทำงาน </li>
                    <li>-ไม่จำเป็นต้องมีการถ่ายทอดทักษะ</li>
                    </ul>
                </p>
                <p className="lead">พัฒนาการของ OD (The Revolution of OD)</p>
              <p>พัฒนาการของ OD (The Revolution of OD) ได้แก่
              <ul className="ml-5" style={{ listStyleType: "circle"}}></ul>
                <li>1.มาจากรากฐานการฝึกอบรมเชิงปฏิบัติการ (Laboratory Training Background 
                  หรือ T-group)</li>
                <li>2.มาจากรากฐาน Action Research และ Survey Feedback</li>
                <li>3.มาจากรากฐาน Normative Backgroundแนวคิดที่เชื่อว่ามีวิธีการที่ดีที่สุดเพียงวิธีการเดียว (One Best Way) 
                  ในการบริหารองค์การ รูปแบบการจัดการแบบมีส่วนร่วม หลักการของตาข่าย (เครือข่าย)</li>
                <li>4.มาจากรากฐานผลิตภาพและคุณภาพชีวิตในการทำงาน 
                  (Productivity และ Quality-of-Work-Life)</li>
                 <ul className="ml-5" style={{ listStyleType: "circle"}}>
                    <li>1) มุ่งพัฒนารูปแบบการทำงานที่ให้ความสำคัญกับความสอดคล้อง
                      ระหว่างเทคโนโลยีกับมนุษย์</li>
                    <li>2) เน้นการมีส่วนร่วมของพนักงาน </li>
                    <li>3) การจัดการทั่วทั้งองค์การ (Total Quality Management) 
                    Total = ทุกคน ทุกระดับ กระทรวง กรม กอง หน่วย 
                    Quality = คุณภาพการให้บริการ ความพึงพอใจของผู้รับบริการ
                    Management = การบริหารองค์การ</li>
                    <li>4) คุณภาพชีวิตในการทำงาน (Quality of Work Life)</li> </ul>
                </p>
                <p><ul className="ml-5" style={{ listStyleType: "circle"}}></ul>
                <li>5.มาจากรากฐาน Strategic Change</li> 
                </p>
                
                <p className="lead">รูปแบบในการพัฒนาองค์การ: OD 
                (Models of Planned Change)</p>
                รูปแบบในการพัฒนาองค์การ: OD 
                (Models of Planned Change)ได้แก่
              <ul className="ml-5" style={{ listStyleType: "circle"}}></ul>
                <li>1.รูปแบบการเปลี่ยนแปลงของ Lewin (Lewin’s Change Model)</li>
                <ul className="ml-5" style={{ listStyleType: "circle"}}>
                    <li>1.)Unfreezing:การเตรียมพร้อมกับการเปลี่ยนแปลง
                    การเตรียมพร้อมกับการเปลี่ยนแปลงกระบวนการนำเสนอข้อมูลความแตกต่างระหว่างพฤติกรรมที่ต้องการให้สมาชิกขององค์การ
                    แสดงออกกับพฤติกรรมปรากฏในปัจจุบันเพื่อจูงใจให้สมาชิกเข้าร่วมกิจกรรมการเปลี่ยนแปลง การสร้างแรงจูงใจหรือความพร้อมในการเปลี่ยนแปลง
                    การทำให้ความไม่พึงพอใจต่อสถานะปัจจุบันปรากฏขึ้นชัดเจนการค้นหาทางเลือกที่ดีกว่าหรือน่าพึงพอใจมากกว่า 
                    กระบวนการพัฒนาองค์การ การทำให้องค์การมีความพร้อมสำหรับการเปลี่ยนแปลงไปสู่สถานะใหม่ที่ดีขึ้น
                    ทำให้สมาชิกในองค์การตระหนักว่าองค์การมีความจำเป็นต้องเปลี่ยนแปลง มิฉะนั้น จะไม่สามารถสร้างผลลัพธ์ที่ดีขึ้น เช่น 
                    ไม่สามารถมีผลประกอบการทางการเงินที่ดีขึ้น ไม่สามารถยกระดับคุณภาพชีวิตในการทำงานของพนักงาน ไม่สามารถดำเนินกิจการต่อไปได้
                    Disruptive Technology เกิดการทำลายเพื่อให้เกิดสิ่งใหม่ที่ดีขึ้นหรือดีกว่าเดิม
                    </li>
                    <li>2.)Moving/ Change:การดำเนินการเปลี่ยนแปลง
                    การดำเนินการเปลี่ยนแปลงการยกระดับพฤติกรรมขององค์การ ฝ่ายหรือบุคคลไปสู่ระดับใหม่ 
                    การแทรกแซงระบบด้วยการเปลี่ยนโครงสร้างและกระบวนการขององค์การ 
                    เพื่อหล่อหลอมพฤติกรรมและค่านิยมและทัศนคติใหม่ ยึดมั่นในพฤติกรรมใหม่ เพื่อให้สถานะในอนาคตตามที่ต้องการเกิดขึ้น
                    รับรู้ถึงความจำเป็นของการเปลี่ยนแปลง ต้องทำให้ก้าวสู่สถานะใหม่ที่ดีกว่าเดิม
                    การจัดกิจกรรมพัฒนาองค์การที่สามารถเปลี่ยนแปลงองค์การให้ก้าวสู่สถานะใหม่ตามที่ต้องการ เช่น การเปลี่ยนแปลงโครงสร้างองค์การ
                    การเปลี่ยนแปลงค่านิยมขององค์การ การพัฒนาศักยภาพของพนักงาน การเปลี่ยนแปลงระบบให้รางวัลขององค์การ
                    </li>
                    <li>3.)Refreezing:การรักษาผลของการเปลี่ยนแปลง
                    การรักษาผลของการเปลี่ยนแปลงเป็นขั้นตอนที่ทำให้สมาชิกในองค์การแสดงพฤติกรรมใหม่ที่สอดคล้องกับการเปลี่ยนแปลงองค์การด้วยกิจกรรมพัฒนาองค์การในขั้นตอน Moving/Change
                     และไม่หวนกลับไปแสดงพฤติกรรมเดิมอีก 
                     Refreezing เป็นขั้นตอนที่ทำให้องค์การดำรงอยู่ในสถานะใหม่ที่มีความสมดุล โดยกระทำผ่านกลไกสนับสนุน
                     ที่ส่งเสริมสถานะใหม่ขององค์การ ด้าน วัฒนธรรม บรรทัดฐาน นโยบาย โครงสร้างองค์การ
                     Refreezing คือกระบวนการที่จะทำให้สถานะใหม่ตามที่ต้องการดำรงอยู่อย่างมั่นคง ยั่งยืน ระยะยาว 
                     และรักษาผลของการเปลี่ยนแปลงให้ดำรงอยู่ตลอดไป</li>
                    </ul>
                  <li>2.รูปแบบ Action Research (Action Research Model)</li>
                  <ul className="ml-5" style={{ listStyleType: "circle"}}>
                    <li>Action Research (การวิจัยเชิงปฏิบัติการ)
                    เป็นกระบวนการที่ดำเนินต่อเนื่องจากขั้นตอนแรกไปจนถึงขั้นตอนสุดท้าย
                    แล้วย้อนกลับไปเริ่มต้นที่ขั้นตอนแรกใหม่และดำเนินไปตามวงจรเดิมตลอดเวลา
                    แล้วย้อนกลับไปเริ่มต้นที่ขั้นตอนแรกใหม่และดำเนินไปตามวงจรเดิมตลอดเวลา
                    Action Research มี 8 ขั้นตอน ดังนี้</li>
                  <li>1.การรับรู้ปัญหา (Problem Identification)
                  เป็นขั้นตอนที่ผู้บริหาร หรือผู้มีอำนาจและบทบาทสำคัญในองค์การตระหนักว่าองค์การมีปัญหา
                  และต้องการให้ที่ปรึกษาด้านการพัฒนาองค์การช่วยแก้ปัญหาดังกล่าว
                  </li>
                  <li>2.การปรึกษากับผู้เชี่ยวชาญด้านการพัฒนาองค์การ 
                    (Consultation with a Behavioral Sciences Export)</li>
                  <li>3.การรวบรวมข้อมูลและการวิเคราะห์เบื้องต้น 
                    (Data Gathering and Preliminary Diagnosis)</li>
                  <li>4.การป้อนกลับข้อมูลและผลการวิเคราะห์ให้ตัวแทนองค์การ 
                    (Feedback to a Key Client or Group)</li>
                  <li>5.การวิเคราะห์ปัญหาร่วมกัน 
                    (Joint Diagnosis of the Problem)</li>
                  <li>6.การวางแผนปฏิบัติร่วมกัน (Joint Action Planning)</li>
                  <li>7.การดำเนินการตามแผนปฏิบัติการ (Action)</li>
                  <li>8. การรวบรวมข้อมูลหลังการดำเนินการ (Data Gathering after Action)</li>
                    </ul>
                
                <li>3.รูปแบบทั่วไปของการวางแผนการเปลี่ยนแปลง (General Model of Planned Change)</li>
                <ul className="ml-5" style={{ listStyleType: "circle"}}>
                   <li>การกำหนดประเด็น (En-tering) </li>
                   1.ที่ปรึกษาด้านการพัฒนาองค์การศึกษาข้อมูลเบื้องต้นเกี่ยวกับองค์การ เช่น 
                    <ul className="ml-5"style={{ listStyleType: "square" }}>
                    <li>พันธกิจ </li>
                    <li>ค่านิยม  </li>
                    <li>ความเป็นมา</li>
                    <li>โครงสร้างองค์การ</li>
                    <li>สินค้าและบริการ </li>
                    <li>ความคาดหวังขององค์การ</li>
                    <li> ประสบการณ์ขององค์การ</li></ul>
                    2.การรวบรวมข้อมูลขององค์การได้จาก
                    <ul className="ml-5"style={{ listStyleType: "square" }}>
                    <li>การสังเกตพฤติกรรมการทำงาน </li>
                    <li>การสัมภาษณ์ </li>
                    <li>การสำรวจความคิดเห็นด้วยแบบสอบถาม</li>
                    <li>การศึกษาข้อมูลจากเอกสารขององค์การ</li>
                    </ul>
                    <li> การทำข้อตกลง (Con-tracting) </li>
                    1)ความคาดหวังของทั้งสองฝ่าย (Expectation of the Parties)
                    <ul className="ml-5"style={{ listStyleType: "square" }}>
                    <li>องค์การระบุผลลัพธ์ที่ได้</li>
                    <li>ที่ปรึกษาฯ ระบุค่าตอบแทน และการอ้างอิงผลงาน  </li>
                   </ul>
                   2) เวลาและทรัพยากรอื่นๆ (Time and Resources)
                    <ul className="ml-5"style={{ listStyleType: "square" }}>
                    <li>ระยะเวลาดำเนินโครงการ</li>
                    <li>ค่าใช้จ่ายที่เกี่ยวข้อง </li>
                   </ul>
                   3)กฎกติกาในการดำเนินโครงการ (Ground Rules)
                    <ul className="ml-5"style={{ listStyleType: "square" }}>
                    <li>การรักษาความลับ</li>
                    <li>แนวทางการตัดสินใจแต่ละฝ่ายที่มีความเห็นไม่ตรงกัน </li>
                   </ul>
                 </ul> 
                 <ul className="ml-5" style={{ listStyleType: "circle"}}>
                   <li>การวินิจฉัยระบบ (Diagnosing) ด้วย McKinsey’s 7S Model</li> </ul>
                 <ul className="ml-5" style={{ listStyleType: "circle"}}>
                   <li>การวางแผนและปฏิบัติตามแผน (Planning and Implementing Change)</li> </ul>
                 <ul className="ml-5" style={{ listStyleType: "circle"}}>
                   <li>การประเมินและรักษาผลของการเปลี่ยนแปลง 
                    (Evaluating Institutionalizing Change)</li> </ul>
                   
                    <li>4.แนวคิดเชิงบวกเกี่ยวกับองค์การ และรูปแบบการเปลี่ยนแปลงเชิงบวก 
                      (Positive Organizational Scholarship 
                      (POS) and Appreciative Inquiry (AI))</li>
                <ul className="ml-5" style={{ listStyleType: "circle"}}></ul>
                แนวคิดเชิงบวกในการพัฒนาและเปลี่ยนแปลงองค์การ
                 Positive Organizational Scholarship (POS)
                 <ul className="ml-5" style={{ listStyleType: "circle"}}>
                <li>แนวคิดเชิงบวกเกี่ยวกับองค์การ หรือ Positive Organizational Scholarship (POS)</li>
                
                <ul className="ml-4">
                    <li>1.การเบี่ยงเบนเชิงบวก (Positive Deviance) 
                      ผลลัพธ์เชิงบวกที่ดีเลิศและกระบวนการที่ทำให้ผลลัพธ์ดังกล่าวเกิดขึ้น </li>
                    <li>2.การมุ่งปัจจัยด้านบวก (An Affirmative orientation) 
                      การให้ความสำคัญกับจุดแข็งแทนที่จะเป็นจุดอ่อน 
                      หรือความสัมพันธ์ที่เป็นประโยชน์แทนที่เป็นความสัมพันธ์ที่ก่อให้เกิดปัญหา</li>
                    <li>3.ความประพฤติที่ซื่อสัตย์และถูกทำนองคลองธรรม (Virtuousness) 
                      และการยกระดับกระบวนการต่างๆ (Elevating Process)
                      เช่น การทำความดีและทำอย่างมีประสิทธิภาพ</li>
                   </ul>
                   <ul className="ml-2" style={{ listStyleType: "circle"}}>
                   <li>หลักการพื้นฐานของ POS (แนวคิดเชิงบวกในการพัฒนาและเปลี่ยนแปลงองค์การ
                     Positive Organizational Scholarship)</li>
                    แนวคิดเชิงบวกเกี่ยวกับองค์การหรือ POS เป็นการอธิบายหลักการพื้นฐานว่า 
                    มนุษย์และองค์การดำรงอยู่ในสถานะต่างๆ 3 สถานะ ได้แก่</ul>
                    
                    <ul className="ml-5"style={{ listStyleType: "square" }}>
                    <li>1.การเบี่ยงเบนเชิงลบ (Negative Deviance)</li>
                    <li>2.ปกติ (Ordinary)</li>
                    <li>3.การเบี่ยงเบนเชิงบวก (Positive Deviance)</li>
                   </ul>
                   </ul> 
                   <ul className="ml-5" style={{ listStyleType: "circle"}}></ul>
                   1.Negative Deviance การเบี่ยงเบนเชิงลบก่อให้เกิดจุดอ่อนในองค์การ
                   <ul className="ml-2" style={{ listStyleType: "circle"}}>
                   <li>Negative Deviance การเบี่ยงเบนเชิงลบสถานะไม่สามารถปฏิบัติหน้าที่ได้ตามปกติ (Dysfucntion State) 
                    เหมือนมนุษย์ที่กำลังป่วย, ภาวะขาดทุน, อาการเจ็บป่วยของพนักงาน, ขาดประสิทธิภาพและประสิทธิผล</li>
                    </ul>
                    <ul className="ml-5" style={{ listStyleType: "circle"}}></ul>
                   2.Ordinary ความเป็นปกติภายในองค์กร
                   <ul className="ml-2" style={{ listStyleType: "circle"}}> <li>
                    Ordinary ความเป็นปกติภายในองค์กร
                    Health มีพลัง มีกำลังใจ Effective มีประสิทธิผล</li>
                    </ul>
                    3.Positive Deviance การเบี่ยงเบนเชิงบวกก่อให้เกิดจุดแข็งในองค์การ
                   <ul className="ml-2" style={{ listStyleType: "circle"}}><li>
                    Positive Deviance การเบี่ยงเบนเชิงบวก สถานะที่ปฏิบัติหน้าที่ได้ดีเลิศ
                     (An Extraodinarily Function State) มนุษย์อยู่ในสถานะมีชีวิตชีวา
                     (Filled with Vitality) ปฏิบัติหน้าที่อย่างราบรื่น องค์การที่มีศักยภาพสูง (Thrive)
                     การปฏิบัติงานขององค์การสอดคล้องกับจริยธรรม
                     สมาชิกขององค์การให้เกียรติซึ่งกันและกัน </li>
                    </ul>
                    
                    <p className="lead">การประยุกต์ใช้รูปแบบการเปลี่ยนแปลงเชิงบวกกับการเปลี่ยนแปลงตามที่วางไว้ 
                    (The Application of Positive Model)</p>
                    รูปแบบการเปลี่ยนแปลงเชิงบวก Appreciate Inquiry (AI)
              <ul className="ml-5" style={{ listStyleType: "circle"}}></ul>
                <li>1.รูปแบบการเปลี่ยนแปลงเชิงบวก (Appreciate Inquiry: AI) 
                  คือการเปลี่ยนจุดแข็งให้เป็นจุดแกร่ง</li>
                
                <li>2.รูปแบบการเปลี่ยนแปลงเชิงบวก Appreciate Inquiry (AI) 
                คือการประยุกต์ใช้การเปลี่ยนแปลงตามที่วางแผนไว้</li>
                <ul className="ml-5" style={{ listStyleType: "circle"}}>
                <li>1.เป็นรูปแบบลัทธิการสร้างสังคม (Social Constructionism) มีลักษณะเชิงปฏิวัติเพื่อนำไปสู่การเปลี่ยนแปลง </li>
                <li>2.สนับสนุนการใช้ค่านิยมเชิงบวกในการวินิจฉัยและเปลี่ยนแปลงองค์การ </li>
                <li>3.การร่วมกันค้นหาสิ่งที่ดีที่สุดในตัวมนุษย์ เป็นการเปลี่ยนแปลงในระบบมนุษย์ </li>
                <li>4.ระบบที่มีประสิทธิผลและความสามารถสูงสุดในเชิงเศรษฐกิจ 
                  (Economy) นิเวศวิทยา (Ecology) และความเป็นมนุษย์ (Human Terms) </li>
                <li>5.กระบวนการเปลี่ยนแปลงที่เริ่มจากจุดแข็ง (จุดแข็งมาชนกับโอกาส) </li>
                <li>6.สร้างโอกาสการเจริญเติบโตและเปลี่ยนแปลงด้วยการค้นหาสิ่งที่ดำเนินไปด้วยดีในระบบนั้น </li>
                </ul>

                <p className="lead">ที่ปรึกษาด้านการพัฒนาองค์การ (OD Practitioner)</p>
                ที่ปรึกษาด้านการพัฒนาองค์การ มีชื่อเรียกแตกต่างกัน ดังนี้
              
              <ul className="ml-5" style={{ listStyleType: "circle"}}>
                <li>OD Practitioner</li>
                <li>OD Consultants</li>
                <li>OD Expert</li>
                <li>Change Agent</li>
                <li>Change Leader</li>
                </ul>
                
                <p className="lead">บุคคลที่มีบทบาทต่อการเปลี่ยนแปลงองค์การ</p>
                1.ลูกค้า (Client) หมายถึง ผู้ที่เป็นสมาชิกขององค์การ ได้แก่ 
                ประธาน รองประธานอาวุโส ผู้จัดการ พนักงาน ฯลฯที่ต้องการเปลี่ยนแปลงและติดต่อขอความช่วยเหลือจากผู้อื่น 
                โดยมีบทบาท ดังนี้
                <ul className="ml-5" style={{ listStyleType: "circle"}}>
                <li>1.แสดงออกถึงความไม่พอใจในสถานะเดิม (Status Quo)</li>
                <li>2.จินตนาการถึงความเป็นไปได้ของสิ่งที่แตกต่างจากเดิม</li>
                </ul>
               
                
                2.ที่ปรึกษาด้านการพัฒนาองค์การ (Change Consultant) คือผู้ที่มีบทบาทคล้ายกับสถาปนิก (Architect)
                 ของกระบวนการเปลี่ยนแปลง เพื่อตอบสนองปัจจัยทางการเงิน การเมือง เทคนิค วัฒนธรรม โครงสร้างและจิตวิญญาณ โดยมีบทบาท ดังนี้ 


                <ul className="ml-5" style={{ listStyleType: "circle"}}>
                <li>1.แปลงความต้องการของลูกค้าเป็นแผนการเปลี่ยนแปลงเบื้องต้น</li>
                <li>2.ให้การสนับสนุนความรู้ด้านเทคนิคในการออกแบบและการนำแผนการเปลี่ยนแปลงไปสู่การปฏิบัติ</li>
                <li>3.พิจารณาความพร้อมในการเปลี่ยนแปลง และดำเนินการต่างๆ เพื่อเพิ่มความพร้อมดังกล่าวหากจำเป็น</li>
                <li>4.ให้คำแนะนำผู้นำองค์การ Champions และทีมที่ดำเนินการเปลี่ยนแปลง รวมทั้งการจัดการต่อต้าน</li>
                <li>5. เป็นผู้นำในการสื่อสารการเปลี่ยนแปลง และทำให้กระบวนการเปลี่ยนแปลงสอดคล้องกับระบบในระหว่างดำเนินการเปลี่ยนแปลง</li>
                </ul>
               
                3. ขวัญใจพนักงาน (Champions) คือผู้ที่เคยประสบความสำเร็จ มีบทบาท ดังนี้ 
                <ul className="ml-5" style={{ listStyleType: "circle"}}>
                <li>1.รับผิดชอบงานหนึ่งๆ เกี่ยวกับการนำแผนการเปลี่ยนแปลงไปสู่การปฏิบัติ</li>
                <li>2.ให้ข้อมูลป้อนกลับเกี่ยวกับกระบวนการเปลี่ยนแปลง ริเริ่มแก้ไข
                   ปรับเปลี่ยนรายละเอียดในตอนกลางของการเปลี่ยนแปลง</li>
                <li>3.ตรวจสอบความถูกต้องของกระบวนการเปลี่ยนแปลง</li>
                <li>4.กำหนดวิธีการทำงาน</li>
                <li>5.รับผิดชอบการบริหารการเปลี่ยนแปลงในหน่วยงานที่อยู่ในความรับผิดชอบ</li>
                <li>6.โน้มน้าวให้พนักงานจำนวนมากเข้าร่วมผลักดันการเปลี่ยนแปลงให้ประสบความสำเร็จ</li>
                <li>7.ใช้ข้อมูลสร้างความมั่นใจ ตอบสนองต่อการต่อต้าน
                   และปรับแผนการเปลี่ยนแปลงให้สอดคล้องกับความคิดเห็นของผู้ต่อต้าน </li>
                <li>8. เฉลิมฉลองความสำเร็จ</li>
                </ul>
                
                4. พนักงานและผู้จัดการ (Staff and Managers)

                <ul className="ml-5" style={{ listStyleType: "circle"}}>
                <li>1.ให้ข้อมูลเกี่ยวกับสิ่งที่ต้องการเปลี่ยนแปลงและวิธีการเปลี่ยนแปลงสิ่งนั้น</li>
                <li>2.ใช้ความเชี่ยวชาญของตนในการช่วยรักษาผลของการเปลี่ยนแปลง</li>
                <li>3.ปฏิบัติงานในความรับผิดชอบเพื่อตรวจสอบกระบวนการเปลี่ยนแปลง</li>
                <li>4.เฉลิมฉลองความสำเร็จ</li>
                </ul>
               
                 <p className="lead">ที่ปรึกษาภายในและภายนอก (Internal and External Practitioners)</p>
                
                
                ที่ปรึกษาภายใน ได้แก่


                <ul className="ml-5" style={{ listStyleType: "circle"}}>
                <li>บุคคลที่ได้รับการว่าจ้างให้ช่วยเปลี่ยนแปลงองค์การ</li>
                <li>พนักงานบริษัทที่ให้คำปรึกษา (Consulting Firm)</li>
                <li>บุคลากรของมหาวิทยาลัย หรือวิทยากรที่ปรึกษาอิสระ</li>
              </ul>
                
                ที่ปรึกษาภายนอก ได้แก่


                <ul className="ml-5" style={{ listStyleType: "circle"}}>
                <li>บุคลากรขององค์การทั้งที่ที่ปฏิบัติงานด้าน OD โดยเฉพาะ
                หรือที่ปฏิบัติงานด้านอื่นร่วม เช่น งานด้านฝึกอบรม งานด้านทรัพยากรมนุษย์  </li>
                </ul>
               
                คุณสมบัติของที่ปรึกษาด้านการพัฒนาองค์การ (Competencies of Practitioners)
                <ul className="ml-5" style={{ listStyleType: "circle"}}>
                <li>1.ทักษะด้านการทำความเข้าใจตนเอง หรือ Competency
                   ด้านการบริหารอารมณ์ความรู้สึกของตนเอง ความรับผิดชอบในการให้ความช่วยเหลือผู้อื่น
                   การสร้างความสมดุลระหว่างเหตุผลและอารมณ์
                   การรู้จักบริหารความเครียดของตนเอง</li>
                <li>2.ทักษะการสร้างความสัมพันธ์กับผู้อื่น (Interpersonal Skills)</li>
                <li>3.ทักษะการให้คำปรึกษาทั่วไป (General Consultation Skills)</li>
                <li>4.ทฤษฎีเกี่ยวกับการพัฒนาองค์การ (Organization Development Theory)</li>
                <li>5.เป็นนักวิเคราะห์ (Diagnostician)</li>
                <li>6.เป็นนักวิจัยสังคมวิทยา (Social Scientist Researcher)</li>
                <li>7.เป็นนักเปลี่ยนแปลง (Interventionist)</li>
                <li>8.เป็นผู้ให้ความรู้หรือนักฝึกอบรม (Educator or Trainer) </li>
                <li>9.เป็นผู้อำนวยความสะดวก (Facilitator)</li>
                <li>10. เป็นผู้ฝึกสอน (Coach)</li>
                 </ul>
                
                 ทักษะและความสามารถของที่ปรึกษาด้านการพัฒนาองค์การจะต้องประกอบด้วย
                <ul className="ml-5" style={{ listStyleType: "circle"}}>
                <li>1.ความรู้ (Knowledge) </li>
                <li>2.การยึดมั่นในมาตรฐานสูงสุดของจริยธรรมและอาชีพ (Commitment)</li>
                <li>3.ความสามารถในการสร้างเครือข่าย (Network Ability)</li>
                <li>4.ทักษะในการแสวงหาข้อมูล (Elicitation Skills)</li>
                <li>5.ทักษะการประเมินและการบูรณาการ (Evaluation and Integration Skills)</li>
                <li>6. ทักษะการวินิจฉัยและการนำเสนอแนวทาง (Diagnostic and Prognosis Skills)</li>
                </ul>
                
                จริยธรรมของที่ปรึกษาด้านการพัฒนาองค์การ(Professional Ethics)
                <ul className="ml-5" style={{ listStyleType: "circle"}}>
                <li>1.การสำแดงข้อมูลเท็จ (Misrepresentation)  </li>
                <li>2.การนำข้อมูลไปใช้ในทางที่ผิด (Misuse of Data)</li>
                <li>3.การบังคับ (Coecion)</li>
                <li>4.ความเห็นต่างในค่านิยมและเป้าหมาย (Value and Goal Conflict)</li>
                <li>5.ความไม่พร้อมด้านเทคนิค (Technical Ineptness)</li>
                </ul>
               
               
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
              <p>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
                nostrum, aliquid, animi, ut quas placeat totam sunt tempora
                commodi nihil ullam alias modi dicta saepe minima ab quo
                voluptatem obcaecati?
              </p>
              <p>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
                dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore
                quidem voluptates cupiditate voluptas illo saepe quaerat numquam
                recusandae? Qui, necessitatibus, est!
              </p>
              <hr />
              <div className="blog-right-side">
                {/* Comments Form */}
                <div className="card my-4">
                  <h5 className="card-header">Leave a Comment:</h5>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Single Comment */}
              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="images/testi_01.png"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>
              {/* Comment with nested comments */}
              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="images/testi_02.png"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="images/testi_01.png"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="images/testi_03.png"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar Widgets Column */}
            <div className="col-md-4 blog-right-side">
              {/* Search Widget */}
              <div className="card mb-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-secondary" type="button">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              {/* Categories Widget */}
              <div className="card my-4">
                <h5 className="card-header">Categories</h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">HTML</a>
                        </li>
                        <li>
                          <a href="#">Freebies</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                        <li>
                          <a href="#">CSS</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Side Widget */}
              <div className="card my-4">
                <h5 className="card-header">Side Widget</h5>
                <div className="card-body">
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the new Bootstrap 4 card
                  containers!
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
