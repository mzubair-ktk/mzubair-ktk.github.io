const publications = [
["AI-driven dynamic resource allocation for ISAC systems in 6G networks: intelligent beamforming, interference management, and power allocation.","Scientific Reports, 2026","https://doi.org/10.1038/s41598-026-42247-"],
["Dynamic power and frequency domain allocation for dedicated sensing signals in downlink ISAC.","Scientific Reports, 2025","https://doi.org/10.1038/s41598-025-32895-x"],
["ISAC based seamless handover solution for SAGIN in high mobility environments.","Scientific Reports, 2025","https://doi.org/10.1038/s41598-025-29697-6"],
["Ultra-fast real time ethanol sensing behavior and reduction in optical bandgap of the hydrothermally synthesized V2O5/ZnO nanocomposites.","Chemical Physics Impact, 2025","https://doi.org/10.1016/j.chphi.2025.100879"],
["Cost analysis of IPv6 distributed mobility management protocols in comparison to TFMIPv6.","PLOS ONE, 19(8), 2024","https://doi.org/10.1371/journal.pone.0306132"],
["Reliable Community Card System for Detecting and Isolating Selfish Vehicles in SCC-Based VDTN’s.","Transactions on Emerging Telecommunications Technologies, 35(6), 2024","https://doi.org/10.1002/ett.5006"],
["Transforming Educational Institutions: Harnessing the Power of Internet of Things, Cloud, and Fog Computing.","Future Internet, 15, 367, 2023","https://doi.org/10.3390/fi15110367"],
["An Efficient and Secure Certificateless Aggregate Signature Scheme for Vehicular Ad hoc Networks.","Future Internet, 15(8), 266, 2023","https://doi.org/10.3390/fi15080266"],
["The Development of Intelligent Agents: A case-based reasoning approach to achieve human-like peculiarities via Playback of Human Traces.","IEEE Access, 2023","https://doi.org/10.1109/ACCESS.2023.3274740"],
["Orchestrating model to improve utilization of IaaS environment for sustainable revenue.","Sustainable Energy Technologies and Assessments, 57, 103228, 2023","https://doi.org/10.1016/j.seta.2023.103228"],
["Performance Evaluation and Comparison of Cooperative Frameworks for IoT-Based VDTN.","Sustainability, 15, 5454, 2023","https://doi.org/10.3390/su15065454"],
["EMS: Efficient Monitoring System to Detect Non-Cooperative Nodes in IoT-Based Vehicular Delay Tolerant Networks (VDTNs).","Sensors, 23(1), 99, 2023","https://doi.org/10.3390/s23010099"],
["Efficient Scheduling of Home Energy Management Controller (HEMC) Using Heuristic Optimization Techniques.","Sustainability, 15, 1378, 2023","https://doi.org/10.3390/su15021378"],
["Misbehavior of nodes in IoT based vehicular delay tolerant networks VDTNs.","Multimedia Tools and Applications, 2023","https://doi.org/10.1007/s11042-022-13624-2"],
["SOS: Socially omitting selfishness in IoT for smart and connected communities.","International Journal of Communication Systems, 36(1), 2023","https://doi.org/10.1002/dac.4455"],
["Generation of Controlled Synthetic Samples and Impact of Hyper-Tuning Parameters to Effectively Classify the Complex Structure of Overlapping Region.","Applied Sciences, 12, 8371, 2022","https://doi.org/10.3390/app12168371"],
["Academic use of social networking sites in learners’ engagement in underdeveloped countries’ schools.","Education and Information Technologies, 2021","https://doi.org/10.1007/s10639-021-10619-8"],
["Cluster-based group mobility support for smart IoT.","Computers, Materials & Continua, 68(2), 2329–2347, 2021",""],
["Stackelberg game for heterogeneous traffics management in next-generation cellular network.","IET Communications, 2021","https://doi.org/10.1049/cmu2.12185"],
["Honesty based democratic scheme to improve community cooperation for Internet of Things based vehicular delay tolerant networks.","Transactions on Emerging Telecommunications Technologies, 32:e4191, 2021","https://doi.org/10.1002/ett.4191"],
["DSAC Digital Signature For Access Control In Information Centric Network.","Webology, 18(4), 2021",""],
["Tunnel-Free Distributed Mobility Management (DMM) Support Protocol for Future Mobile Networks.","Electronics, 8(12), 1519, 2019",""],
["IPS: Incentive and Punishment Scheme for Omitting Selfishness in the Internet of Vehicles (IoV).","IEEE Access, 7, 109026–109037, 2019",""],
["Surface Detection in Automobile using Sensors.","International Journal of Computer Science and Network Security, 18(9), 137–143, 2018",""],
["DMAM: Distributed Mobility and Authentication Mechanism in Next Generation Networks.","Security and Communication Networks, 8(5), 845–863, 2015",""],
["Integrating SIP with F-HMIPv6 to Enhance End-to-End QoS in Next Generation Networks.","Advances in Intelligent Systems and Computing, 240, 715–725, 2014",""],
["SIDP: A Secure Inter-domain Distributed PMIPv6.","International Journal of Information and Electronics Engineering, 4(2), 103–110, 2014",""],
["Cross-layer Localized Mobility Management based on SIP and HMIPv6 in Next Generation Networks.","Journal of Communications, 9(3), 217–225, 2014",""],
["Secure Session Mobility using Hierarchical Authentication Key Management in Next Generation Networks.","Journal of Networks, 9(5), 1121–1131, 2014",""],
["CLAM: Cross-layer Localized Authentication Mechanism based on Proxy MIPv6 and SIP.","Journal of Communications, 9(2), 144–156, 2014",""],
["Providing end-to-end QoS in Next Generation Networks (NGNs) using combined SIP HMIPv6 (CSH).","IEEE ICCNIT, 2011, pp. 113–118","https://doi.org/10.1109/ICCNIT.2011.6020916"],
["COPE: Cooperative Power and Energy-efficient routing protocol for Wireless Sensor Networks.","IEEE/ACIS 14th International Conference on Computer and Information Science (ICIS’15), 2015",""],
["GPA: Graphical Interface Based Path coefficient analysis.","8th Conference on Extreme Value Analysis, Fudan University, Shanghai, 2013",""]
];

const list = document.getElementById("pubList");
const search = document.getElementById("pubSearch");
const showMore = document.getElementById("showMore");
let expanded = false;

function render(){
  const q = search.value.toLowerCase().trim();
  const filtered = publications.filter(p => p.join(" ").toLowerCase().includes(q));
  const visible = expanded || q ? filtered : filtered.slice(0, 10);
  list.innerHTML = visible.map((p,i) => `
    <article class="pub">
      <div><span class="pub-num">${filtered.indexOf(p)+1}.</span><span class="pub-title">${p[0]}</span></div>
      <div class="pub-meta">${p[1]} ${p[2] ? ` · <a href="${p[2]}" target="_blank" rel="noopener">DOI / publication link ↗</a>` : ""}</div>
    </article>`).join("");
  showMore.style.display = (q || filtered.length <= 10) ? "none" : "flex";
  showMore.textContent = expanded ? "Show fewer publications" : "Show all publications";
}
search.addEventListener("input", render);
showMore.addEventListener("click",()=>{expanded=!expanded;render()});
render();

document.querySelector(".menu-btn").addEventListener("click",()=>{
  document.querySelector(".nav-links").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{
  document.querySelector(".nav-links").classList.remove("open");
}));
document.getElementById("year").textContent = new Date().getFullYear();
