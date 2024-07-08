const data = [
  {
    title: "Data Governance",
    image: "/assets/images/exhibition/cloud-consultancy/1.svg",
    description:
      "Our expert data engineers can help improve your data quality score by designing & implementing an effective data governance policy with focus on regulatory and compliance requirements.",
  },
  {
    title: "Data Analytics",
    image: "/assets/images/exhibition/cloud-consultancy/2.svg",
    description:
      "Bring large volumes of data together and use simplified Analytics tools such as Informatica & Qlik to visualize & analyze data in one place to help drive critical business decisions.",
  },
  {
    title: "Enterprise Data Management",
    image: "/assets/images/exhibition/cloud-consultancy/3.svg",
    description:
      "Innobayt provides Enterprise Data Management (EDM) implementation services to help integrate, secure and classify data using MDM approach.",
  },
  {
    title: "Robotic Process Automation",
    image: "/assets/images/exhibition/cloud-consultancy/1.svg",
    description:
      "Large complex problems can sometimes be simplified and solved using easy to use low code robotic process automation (RPA) and digital process automation (DPA) tools.",
  },
  {
    title: "Business Intelligence",
    image: "/assets/images/exhibition/cloud-consultancy/2.svg",
    description:
      "Our business analysts can help create beautiful dashboards using cutting edge BI tools such as Power BI, Tableau & Qlik to visualize and work with data effectively.",
  },
  {
    title: "AI & ML Services",
    image: "/assets/images/exhibition/cloud-consultancy/3.svg",
    description:
      "Get the most out of your data by applying Aritifical Intelligence (AI) & Machine Learning (ML) services such as deep learning, predictive analytics, sales intelligence and more on your stored data.",
  },
];

export default function DataServices() {
  return (
    <>
      {data.map((item) => (
        <div className="col p-3" key={item.title}>
          <div className="d-flex gap-3">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <img src={item.image} width={50} alt="Image" />
            </div>
            <div className="d-flex flex-column">
              <h3 className="h6 fw-boldwow fadeInUp" data-wow-delay=".3s">{item.title}</h3>
              <p className="wow fadeInUp" data-wow-delay=".6s">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
