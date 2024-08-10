import './App.css';

function App() {

  const Info = () => {
    // Data arrays
    const companies = [
      'virtusaconsultingservicespvt.ltd.',
      'virtusaconsultingservicespvt.ltd.',
      'SEVENCONSULTANCY',
      'eastindiasecuritiesltd.',
      'arttechnologyandsoftwareindiapvtltd',
      'LAKSHHUMANRESOURCE',
      'CONNECTING2WORK',
      'xoniertechnologiespvtltd',
      'zengatv',
      'DatagridSolutions',
      'DREAMAJAXTECHNOLOGIES',
      'INFINITYGROUP',
      'day1technologies',
      '3RITechnologiesPvtLtd',
      'virtusaconsultingservicespvt.ltd.',
      'SEVENCONSULTANCY',
      'websharaninfotech'
    ];

    const skills = [
      'pythondevelopment,objectorientedprogramming,testdrivendevelopment,databaseconnectors,linuxenvironment,git,api',
      'dataanalysis,communication,problemsolving,microsoftoffice,visualizationtools,dataanalytics,dataanalyst,sql,tableau,writtencommunication',
      'python,mvc,sql',
      'python,hadoop,machinelearning',
      'rest,python,database,django,api',
      'rest,python,django,git',
      'rest,python,django,mongodb',
      'python,django,testingtools,debugging,storage',
      'python,django,html5,javascript',
      'python,database,django,mysql,api',
      'python,django,api,sql,nosql',
      'python,css,django,html,bootstrap',
      'rest,python,django,git,postgresql,sql,docker',
      'python,Pandas,PyQt5,Matplotlib,Openpyxl',
      'pythondeveloper,hadoop,bigdata,pyspark,etltools,hive,hdfs,hbase',
      'Pythonprogramming,programminglanguage,front-enddeveloper',
      'python,problemsolving,softwareproject,softwareengineering'
    ];

    const jobLinks = [
      'https://www.timesjobs.com/job-detail/python-virtusa-consulting-services-pvt-ltd-pune-8-to-11-yrs-jobid-PRoGGHjEoVVzpSvf__PLUS__uAgZw==&source=srp',
      'https://www.timesjobs.com/job-detail/python-virtusa-consulting-services-pvt-ltd-pune-5-to-8-yrs-jobid-uQ47cYpy12NzpSvf__PLUS__uAgZw==&source=srp',
      'https://www.timesjobs.com/job-detail/python-developer-seven-consultancy-navi-mumbai-mumbai-4-to-7-yrs-jobid-IE1BS7uWMdNzpSvf__PLUS__uAgZw==&source=srp',
      'https://www.timesjobs.com/job-detail/python-engineer-east-india-securities-ltd-kolkata-2-to-5-yrs-jobid-O9JSjUglX3hzpSvf__PLUS__uAgZw==&source=srp',
      'https://www.timesjobs.com/job-detail/python-developer-art-technology-and-software-india-pvt-ltd-cochin-kochi-ernakulam-2-to-3-yrs-jobid-LwuulL9CkdpzpSvf__PLUS__uAgZw==&source=srp',
      'https://www.timesjobs.com/job-detail/python-developer-laksh-human-resource-mumbai-1-to-3-yrs-jobid-uUEqcx71MRdzpSvf__PLUS__uAgZw==&source=srp',
      'https://www.timesjobs.com/job-detail/python-trainer-connecting-2-work-calicut-kozhikode-0-to-3-yrs-jobid-MFJXBwZBWVhzpSvf__PLUS__uAgZw==&source=srp',
      'https://www.timesjobs.com/job-detail/python-developer-xonier-technologies-pvt-ltd-noida-greater-noida-2-to-5-yrs-jobid-zOHQ8Tw7IgRzpSvf__PLUS__uAgZw==&source=srp',
      'https://www.timesjobs.com/job-detail/python-developer-zenga-tv-gurgaon-2-to-5-yrs-jobid-cQGeFhRqgNdzpSvf__PLUS__uAgZw==&source=srp',
      'https://www.timesjobs.com/job-detail/python-developer-datagrid-solutions-mumbai-2-to-3-yrs-jobid-hdLfInxHIFxzpSvf__PLUS__uAgZw==&source=srp',
      'https://www.timesjobs.com/job-detail/python-developer-dreamajax-technologies-bengaluru-bangalore-4-to-7-yrs-jobid-55iKtddZNCdzpSvf__PLUS__uAgZw==&source=srp',
      'https://www.timesjobs.com/job-detail/python-developer-infinity-group-noida-greater-noida-2-to-5-yrs-jobid-WKzksjq__PLUS__GXxzpSvf__PLUS__uAgZw==&source=srp',
      'https://www.timesjobs.com/job-detail/python-developer-day1-technologies-bengaluru-bangalore-2-to-3-yrs-jobid-5yTMsjn5vkJzpSvf__PLUS__uAgZw==&source=srp',
      'https://www.timesjobs.com/job-detail/python-programmer-3ri-technologies-pvt-ltd-pune-0-to-1-yrs-jobid-vZNYzFWGBAdzpSvf__PLUS__uAgZw==&source=srp',
      'https://www.timesjobs.com/job-detail/python-developer-virtusa-consulting-services-pvt-ltd-chennai-5-to-8-yrs-jobid-59s9mmDXOiZzpSvf__PLUS__uAgZw==&source=srp',
      'https://www.timesjobs.com/job-detail/python-developer-seven-consultancy-surat-9-to-12-yrs-jobid-Oi3jhp3isY5zpSvf__PLUS__uAgZw==&source=srp',
      'https://www.timesjobs.com/job-detail/python-developer-websharan-infotech-pune-0-to-3-yrs-jobid-Ujq9FCZjPgtzpSvf__PLUS__uAgZw==&source=srp'
    ];

    // Map over the arrays to generate the list of job postings
    return companies.map((company, index) => (
      <div key={index} style={{backgroundColor:'#FFDFD6'}} className=" p-8 m-8 rounded-xl">
        <h3 className="text-3xl font-bold mb-2">{company}</h3>
        <p className="text-xl mb-2"><strong>Skills Required:</strong> {skills[index]}</p>
        <a href={jobLinks[index]} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          View Job Posting
        </a>
      </div>
    ));
  };

  return (
    <div style={{ backgroundColor: '#E3A5C7' }} className="h-screen w-screen overflow-auto">
      <div className="p-8">
        <h1 className="text-center p-6 text-5xl font-bold mb-8">Job Postings</h1>
        <div>{Info()}</div>
      </div>
    </div>
  );
}

export default App;
