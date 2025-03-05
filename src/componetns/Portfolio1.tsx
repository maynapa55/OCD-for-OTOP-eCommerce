import Link from 'next/link'
import React from 'react'

export default function Portfolio() {
  return (
    <div>
      <>
  {/* full Title */}
  <div className="full-title">
    <div className="container">
      {/* Page Heading/Breadcrumbs */}
      <h1 className="mt-4 mb-3">
        การดำเนินการเปลี่ยนแปลงภาครัฐในยุคดิจิทัล
        {/* <small>Subheading</small> */}
      </h1>
    </div>
  </div>
  {/* Page Content */}
  <div className="container">
    <div className="breadcrumb-main">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">หน้าหลัก</a>
        </li>
        <li className="breadcrumb-item active">Portfolio 1</li>
      </ol>
    </div>
    <div className="project-inner">
      {/* Project One */}
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-01.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล</h3>
          <p>
          ก้าวที่ท้าทายของการเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
          </p>
          <p>
          “ต้องยอมรับว่าความท้าทายของภาครัฐในยุคนี้ คือ จะทำอย่างไรให้ประชาชนติดต่อและรับบริการจากภาครัฐได้โดยสะดวกในโลกยุคดิจิทัล 
           คำตอบก็คือ การปรับเปลี่ยนไปสู่ภาครัฐที่ทันสมัย ใช้เทคโนโลยีดิจิทัลในการบริหารงานและให้บริการแก่ประชาชน
           ซึ่งก็คือการก้าวไปสู่การเป็น รัฐบาลดิจิทัล (Digital Government) นั่นเอง”
          </p>
          <a className="btn btn-primary" 
          href="images/change/chang_processing-1-66.pdf" 
          target='_blank'
           rel='noopener noreferrer'>
            ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    <div className="project-inner">
      {/* Project Two */}
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-02.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐให้เกิดประสิทธิผล
</h3>
          <p>
          การบริหารงานภาครัฐแนวใหม่ (New Public Management) คือ 
          การปรับเปลี่ยนการบริหารจัดการภาครัฐโดยนำหลักการเพิ่มประสิทธิภาพของระบบราชการและการแสวงหาประสิทธิภาพในการปฏิบัติราชการที่มุ่งสู่ความเป็นเลิศ 
          โดยการนำเอาแนวทางหรือวิธีการบริหารงานของภาคเอกชนมาปรับใช้กับการบริหารงานภาครัฐ 
          </p>
          <p>
          เช่น การบริหารงานแบบมุ่งเน้นผลสัมฤทธิ์ การบริหารงานแบบมืออาชีพ การคำนึงถึงหลักความคุ้มค่า
           การจัดการโครงสร้างที่กะทัดรัดและแนวราบ การเปิดโอกาสให้เอกชนเข้ามาแข่งขันการให้บริการสาธารณะ การให้ความสำคัญต่อค่านิยม จรรยาบรรณวิชาชีพ 
          คุณธรรมและจริยธรรม ตลอดทั้งการมุ่งเน้นการให้บริการแก่ประชาชนโดยคำนึงถึงคุณภาพเป็นสำคัญ
          </p>
          <a className="btn btn-primary" href="images/change/chang_processing-67-71.pdf"
           target='_blank'
           rel='noopener noreferrer'>
           ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    <div className="project-inner">
      {/* Project Three */}
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-03.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การดำเนินการเปลี่ยนแปลง เพื่อเปลี่ยนผ่านไปสู่ความเป็นองค์กรดิจิทัล</h3>
          <p>
          เป็นที่ชัดเจนว่า เรากำลังเผชิญกับการใช้ชีวิต การทำธุรกิจบนโลกมีลักษณะผันผวน ไม่แน่นอน สลับซับซ้อน และกำกวม หรือที่เรียกว่า VUCA(Volatility, Uncertainty, Complexity และ Ambiguity) 
          อันเนื่องจากผลกระทบจากเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็ว โดยเฉพาะเทคโนโลยีดิจิทัลที่มีรากเหง้ามาจากเทคโนลีสารสนเทศและการสื่อสาร (ICT: Information and Communication Technology) 
          </p>
          <p>
          เทคโนโลยีดิจิทัลเป็นหนึ่งในสามเทคโนโลยีสู่ยุคอนาคต ที่รวมถึงเทคโนโลยีชีวภาพ
           และเทคโนโลยีนาโน ซึ่งคือยุคปฏิวัติอุตสาหกรรมครั้งที่ 4 (4th Industrial Revolution) 
           ที่เกิดการเชื่อมต่อระหว่างคนกับคอมพิวเตอร์อย่างไร้รอยต่อ (Seamless Interaction)
           อันนำไปสู่จักรวาลนฤมิต หรือ เมตาเวิร์ส (Metaverse)
          </p>
          <a className="btn btn-primary" href="images/change/chang_processing-72-75.pdf"
           target='_blank'
           rel='noopener noreferrer'>
            View Project
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Four */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง </h3>
          <p>
            7 ปัจจัยที่มีผลต่อการเปลี่ยนแปลงครั้งใหญืจากความคิดเห็นของผู้บริหาร2000 คน 
          </p>
          <p>
            ในการสำรวจผู้บริหารในองค์กรทุกขนาดและทุกอุตสาหกรรมมากกว่า2,000 ราย โดย Mckinsey ในปี 2014
            ตอนหนึ่งของรายการได้กล่าวถึงปัจจัยที่เหล่าผู้บริหารให้ความเห็นว่าเป็นสิ่งที่สำคัญที่ช่วย
            ให้การเปลี่ยนแปลงประสบความสำเร็จอย่างยั่งยืน
          
          </p>
          <a className="btn btn-primary" href="images/change/chang_processing-76-78.pdf"
           target='_blank'
           rel='noopener noreferrer'>
            View Project
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Five */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การสร้างความพร้อมในการเปลี่ยนแปลง </h3>
          <p>คุณพร้อมไหม? ...นักจิตวิทยาพร้อมช่วย
            การสร้างความพร้อมในการเปลี่ยนแปลงพฤติกรรมเพื่อส่งเสริมสุขภาพ
          </p>
          <p>ผลการวิจัยทางด้านพฤติกรรมสุขภาพจำนวนมากพบผลสอดคล้องกันว่าการออกกำลังกายส่งผลดีต่อสุขภาพทั้งด้านร่างกาย 
            จิตใจ และสังคมของผู้ออกกำลังกาย เช่น ทำให้ร่างกายแข็งแรงและมีอารมณ์สดชื่นแจ่มใส
            การออกกำลังกายต้องทำเป็นกิจกรรมกลุ่ม เช่น การติแบดมินตัน การเล่นบาส
            ยังเป็นการเปิดโอกาสให้เราได้สร้างความรู้จักกับคนอื่นๆ
            ที่มีความหลากหลาย คนต่างอาชีพ ต่างวัยมากขึ้น
             </p>
          <a className="btn btn-primary" href="images/change/chang_processing-79-82.pdfpdf"
           target='_blank'
           rel='noopener noreferrer'>
            ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Six */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>ตัวอย่างแบบสำรวจความพร้อมในการเปลี่ยนแปลง </h3>
          <p>แบบสำรวจการจัดการการเปลี่ยนยแปลงมากกว่า 100 ข้อ</p>
          <p>
            แบบสำรวจการจัดการการเปลี่ยนแปลงแบบสนทนาได้รับอัตราการตอบสนองสูงสุด
            สร้างแบบสำรวจได้อย่างง่ายดายด้วย้ทมเพลตสำเร็จรูป
            นี่คือแบบสำรวจข้อเสนอแนะเกี่ยวกับการจัดการการเปลี่ยนแปลงที่จะช่วยคุณในกระบวนการรวบรวม
            ข้อเสนอแนะและดำเนินการตามนั้น
          
          </p>
          <a className="btn btn-primary" href="images/change/chang_processing-83-85.pdf.pdf"
           target='_blank'
           rel='noopener noreferrer'>
            ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project seven */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การต่อต้านการเปลี่ยนแปลง (Resistance to Change)  </h3>
          <p><Link href="https://www.humanica.com/th/resistance-to-change/" target='_blank'rel='noopener noreferrer'>
            การต่อต้านการเปลี่ยนแปลงคืออะไร องค์กรควรรับมืออย่างไร</Link></p>
         
          <p>
          การต่อต้านการเปลี่ยนแปลง นับว่าเป็นปัญหาสำคัญที่หลายองค์กรมักมองข้าม เพราะด้วยความคิดที่ว่า 
          หากมีนโยบายการเปลี่ยนแปลงใดๆ ขึ้นมา เหล่าพนักงานย่อมต้องเชื่อฟังและปฏิบัติตาม แต่เชื่อไหมว่า มีบางส่วนเท่านั้นที่ยอมรับได้ และแน่นอนว่าก็มีบางส่วนที่ยอมรับไม่ได้เช่นกัน นำมาสู่การต่อต้านการเปลี่ยนแปลงในที่สุด
           สำหรับบทความนี้ Humanica จะมาเจาะลึกถึงสาเหตุและวิธีการรับมือกับสถานการณ์ที่ว่ามานี้
          </p>
          <p>
          การต่อต้านการเปลี่ยนแปลง คือ การที่องค์กรจำเป็นต้องปรับเปลี่ยนโครงสร้างภายใน เพื่อรองรับการเติบโต 
          หรือเพื่อความอยู่รอดขององค์กร แต่มีพนักงานบางส่วนไม่ยอมรับและปฏิเสธการเปลี่ยนแปลงดังกล่าว ทำให้เกิดการต่อต้านการเปลี่ยนแปลงนั่นเอง ยกตัวอย่างเช่น การเปลี่ยนผู้บริหาร, การเปลี่ยนระบบการทำงาน,
           การปรับเปลี่ยนกลยุทธ์ทางการตลาด หรือการเปลี่ยนวัฒนธรรมองค์กรใหม่ เป็นต้น
          
          </p>
          <a className="btn btn-primary" href="images/change/chang_processing-86-89.pdf.pdf"
           target='_blank'
           rel='noopener noreferrer'>
           ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project eight */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การเอาชนะการต่อต้านการเปลี่ยนแปลง 
          </h3>
          <p>
             <Link href="https://brightsidepeople.com/10-%E0%B9%80%E0%B8%84%E0%B8%A5%E0%B9%87%E0%B8%94%E0%B8%A5%E0%B8%B1%E0%B8%9A-%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81/">
              10 เคล็ดลับ บริหารจัดการและลดการต่อต้านการเปลี่ยนแปลงภายในองค์กร</Link>
          </p>
          <p>
           การเปลี่ยนแปลงองค์กรเป็นเรื่องกรเป็นเรื่องยาก ในโลกทุกวันนี้
           การเปลี่ยนแปลงคือสิ่งเดียวที่ไม่เปลี่ยนแปลงซึ่งรายล้อมเราอยูุ่
           ในธุรกิจก็เช่นเดียวกัน สำหรับพนักงงาน
           การจัดการการเปลี่ยนแปลงอาจเป็นเรื่องสำคัญ
          
          </p>
          <a className="btn btn-primary" href="images/change/chang_processing-90-92.pdf"
           target='_blank'
           rel='noopener noreferrer'>
            ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project nine */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง (Creating a Vision to Change) </h3>
          <p>
            
          </p>
          <p>
           
          
          </p>
          <a className="btn btn-primary" href="images/change/chang_processing-93-98.pdf"
           target='_blank'
           rel='noopener noreferrer'>
            ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project ten */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>ขั้นตอนการกำหนดวิสัยทัศน์ (Steps of Creating a Vision) </h3>
          <p>
            
          </p>
          <p>
            
          
          </p>
          <a className="btn btn-primary" href="images/change/chang_processing-99-102.pdf"
           target='_blank'
           rel='noopener noreferrer'>
            ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Four */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การค้นหาผู้มีส่วนได้ส่วนเสีย (Identifying Key Stakeholders) </h3>
          <p>
            
          </p>
          <p>
            
          
          </p>
          <a className="btn btn-primary" href="images/change/chang_processing-103-106.pdf"
           target='_blank'
           rel='noopener noreferrer'>
            ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Four */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การโน้มน้าวผู้มีส่วนได้ส่วนเสีย (Identifying Key Stakeholders) </h3>
          <p>
            
          </p>
          <p>
            
          
          </p>
          <a className="btn btn-primary" href="images/change/chang_processing-103-106.pdf"
           target='_blank'
           rel='noopener noreferrer'>
            ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Four */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การค้นหาผู้มีส่วนได้ส่วนเสีย (Identifying Key Stakeholders) </h3>
          <p>
            
          </p>
          <p>
            
          
          </p>
          <a className="btn btn-primary" href="images/change/chang_processing-103-106.pdf"
           target='_blank'
           rel='noopener noreferrer'>
            ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Four */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การโน้มน (Influencing  Stakeholders) </h3>
          <p>
            
          </p>
          <p>
            
          
          </p>
          <a className="btn btn-primary" href="images/change/chang_processing-107-110.pdf"
           target='_blank'
           rel='noopener noreferrer'>
            ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Four */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลง (Change-Management Structures) 
 </h3>
          <p>
            
          </p>
          <p>
           
          
          </p>
          <a className="btn btn-primary" href="images/change/chang_processing-111-114.pdf"
           target='_blank'
           rel='noopener noreferrer'>
            View Project
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Four */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การประคับประคองการเปลี่ยนแปลง (Sustaining Momentum)  </h3>
          <p>
            
          </p>
          <p>
            
          
          </p>
          <a className="btn btn-primary" href="images/change/chang_processing-115-119.pdf"
           target='_blank'
           rel='noopener noreferrer'>
            View Project
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Four */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง </h3>
          <p>
            7 ปัจจัยที่มีผลต่อการเปลี่ยนแปลงครั้งใหญืจากความคิดเห็นของผู้บริหาร2000 คน 
          </p>
          <p>
            ในการสำรวจผู้บริหารในองค์กรทุกขนาดและทุกอุตสาหกรรมมากกว่า2,000 ราย โดย Mckinsey ในปี 2014
            ตอนหนึ่งของรายการได้กล่าวถึงปัจจัยที่เหล่าผู้บริหารให้ความเห็นว่าเป็นสิ่งที่สำคัญที่ช่วย
            ให้การเปลี่ยนแปลงประสบความสำเร็จอย่างยั่งยืน
          
          </p>
          <a className="btn btn-primary" href="images/change/chang_processing-76-78.pdf"
           target='_blank'
           rel='noopener noreferrer'>
            View Project
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    <div className="pagination_bar">
      {/* Pagination */}
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  {/* /.container */}
</>

    </div>
  )
}
