
import './App.css'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { House,Users,PhoneCall,Mail,Layers,List,ChartNetwork,FileText,Dock,Chrome,FolderDown,LifeBuoy,Logs,Search,Bell,ArrowDown,Funnel,RefreshCcw,Tally2,ArrowUp,EllipsisVertical,ArrowLeft,ArrowRight,Power} from 'lucide-react';
import { Pagination } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import TextField from '@mui/material/TextField';


import Dropdown from 'react-bootstrap/Dropdown';


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  


  const leads = [
    {
      id: "#3066",
      customer: "Olivia Rhye",
      company: "Empire Mark",
      email: "rhye@empiremark.io",
      phone: "+1 (218) 699-3149",
      value: "$1,821.02",
      tag: "Important",
      source: "Facebook",
      status: "Customer",
      created: "Just now",
    },
    {
      id: "#3065",
      customer: "Phoenix Baker",
      company: "Wit Ventures",
      email: "baker@witventures.com",
      phone: "+1 (326) 507-6709",
      value: "$8,398.70",
      tag: "Follow up",
      source: "Facebook",
      status: "Qualified",
      created: "44 mins ago",
    },
    {
      id: "#3064",
      customer: "Lana Steiner",
      company: "Factor Four",
      email: "steiner@factorfour.com",
      phone: "+1 (208) 608-6292",
      value: "$5,286.94",
      tag: "Review",
      source: "LinkedIn",
      status: "Working",
      created: "3 hr ago",
    },
    {
      id: "#3063",
      customer: "Demi Wilkinson",
      company: "Market Square",
      email: "wilkinson@marketsq.com",
      phone: "+1 (317) 234-6462",
      value: "$2,968.95",
      tag: "Follow up",
      source: "Dribbble",
      status: "Contacted",
      created: "7 hr ago",
    },
    {
      id: "#3062",
      customer: "Candice Wu",
      company: "Voice Firm",
      email: "candice@voicefirm.com",
      phone: "+1 (680) 539-0761",
      value: "$7,005.23",
      tag: "Review",
      source: "LinkedIn",
      status: "Qualified",
      created: "12 hr ago",
    },
    {
      id: "#3061",
      customer: "Natali Craig",
      company: "Maxus Media",
      email: "natali@maxusmedia.net",
      phone: "+1 (540) 683-1441",
      value: "$2,595.82",
      tag: "Review",
      source: "UpWork",
      status: "Proposal Sent",
      created: "Yesterday",
    },
  ];

 
  

  return (
    <>
     <div style={{height:'100vh',width:'100%'}} className='d-flex flex-column ' >

    <nav className="navbar navbar-expand-lg shadow-sm bg-white">
        <div className="container-fluid d-flex align-items-center">
          <div className="d-flex align-items-center">
            <Chrome size={30} color="blue" />
            <Logs className="ms-5" />
          </div>

          <form className="d-none d-md-flex ms-3 bg-white border rounded px-2" style={{ maxWidth: "300px" }}>
            <Search className="me-2" />
            <input className="form-control border-0" type="search" placeholder="Search" />
          </form>

          <div className="d-flex align-items-center ms-auto">
            <Bell className="me-4" />          
           <div>
             <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
         <img
                src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"
                alt="profile"
                className="rounded-circle me-2"
                width="35"
                height="35"
              />
       
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Billing</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
        <Dropdown.Item href="#/action-3"> <Power className='fs-2' /> Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
             
           </div>
            
            <small className="d-none d-sm-block">pamela cain <br /> pameela@dyson.com</small>
          </div>
        </div>
      </nav>




   <div style={{flex:'1',backgroundColor:'#ffffff'}} className='d-flex'>
     <Nav className="d-none d-md-flex flex-column justify-content-between bg-light shadow-sm border-end p-2" style={{ width: '4rem' }}>
          <div className="d-flex flex-column align-items-center">
            <House size={22} className="my-3" />
            <Users size={22} className="my-3" />
            <Mail size={22} className="my-3" />
            <PhoneCall size={22} className="my-3" />
            <FileText size={22} className="my-3" />
            <Layers size={22} className="my-3" />
            <List size={22} className="my-3" />
            <ChartNetwork size={22} className="my-3" />
            <Dock size={22} className="my-3" />
          </div>
          <div className="d-flex flex-column align-items-center mb-3">
            <FolderDown />
            <LifeBuoy className="mt-2" />
          </div>
        </Nav>

    <main className="p-3 flex-grow-1 bg-light overflow-auto">
     <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <div>
              <h5>Leads management</h5>
              <p className="text-muted">Organize leads and track their progress effectively here</p>
            </div>
            <div className="mt-2 mt-md-0">
              <button onClick={handleShow} className="btn btn-primary">+ New Leads</button>
              <button className="btn btn-outline-dark ms-2"><ArrowDown /> Export</button>
            </div>
          </div>


      <div className='row g-2 my-3 shadow-sm rounded' style={{backgroundColor:'#ffffff'}}>
          <div className="col-6 col-md text-center rounded py-2">
              <p className="fw-bold mb-1">New</p>
              <h6>127</h6>
            </div>
        
       
        <div className="col-6 col-md text-center rounded py-2">
              <p className="fw-bold mb-1">Contacted</p>
              <h6>705k</h6>
            </div>
       
        <div className="col-6 col-md text-center rounded py-2">
              <p className="fw-bold mb-1">Qualified</p>
              <h6>249k</h6>
            </div>
       
        <div className="col-6 col-md text-center rounded py-2">
              <p className="fw-bold mb-1">Working</p>
              <h6>57k</h6>
            </div>
       
        <div className="col-6 col-md text-center rounded py-2">
              <p className="fw-bold mb-1">Proposal sent</p>
              <h6>1.1k</h6>
            </div>
        
        <div className="col-6 col-md text-center rounded py-2">
              <p className="fw-bold mb-1 text-success">Customer</p>
              <h6>3.7k</h6>
            </div>
       
        <div className="col-6 col-md text-center rounded py-2">
              <p className="fw-bold mb-1 text-danger">Lost Leads</p>
              <h6>5.2k</h6>
            </div>


      </div>
      
      <div className='d-flex flex-column flex-md-row justify-content-between mt-4 gap-3'>
  
  <div className='d-flex flex-wrap gap-2'>
    <button className='btn btn-outline-dark d-flex align-items-center'>
      <Funnel className="me-1" /> Filter
    </button>
    <button className='btn btn-outline-dark d-flex align-items-center'>
      <Layers className="me-1" /> Bulk Actions
    </button>
    <button className='btn btn-outline-dark d-flex align-items-center'>
      <RefreshCcw />
    </button>
  </div>

  
  <div className='d-flex flex-column flex-sm-row align-items-stretch gap-2'>
    <form
      className="d-flex align-items-center bg-white border rounded px-2"
      role="search"
      style={{ width: '100%', maxWidth: '300px' }}
    >
      <Search className='me-2' />
      <input
        className="form-control border-0"
        type="search"
        placeholder="Search"
      />
    </form>

    <button className='btn btn-outline-dark d-flex align-items-center'>
      <Tally2 className="me-1" /> View
    </button>
  </div>
</div>


      <div className='mt-3 border rounded shadow-sm table-responsive' style={{backgroundColor:'#ffffff'}}>
        <table style={{width:'100%',padding:'0.5rem'}} className='border p-5'>
         <thead>
           <tr className='p-5' style={{height:'60px'}}>
            <th className='p-1'><input type="checkbox" /></th>
            <th>Lead ID</th>
            <th>Customer</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Value</th>
            <th>Tags</th>
            <th>Source</th>
            <th>Assigned</th>
            <th>Status</th>
            <th>Created <ArrowUp /></th>
            <th></th>
           </tr>
         </thead>
         <tbody >
         
         {leads.map((lead)=>(
          <tr style={{height:'60px',padding:'0.5rem'}} className=''>
            <td className='p-1'><input type="checkbox" /></td>
            <td style={{fontWeight:'600'}}>{lead.id}</td>
            <td style={{fontWeight:'600',color:'blue'}}>{lead.customer}</td>
            <td style={{fontWeight:'600',color:'grey'}}>{lead.company}</td>
            <td style={{fontWeight:'600',color:'blue'}}><>{lead.email}</></td>
            <td style={{fontWeight:'600',color:'blue'}}>{lead.phone}</td>
            <td>{lead.value}</td>
            <td> <span
                  className={`badge ${
                    lead.tag === "Important"
                      ? "bg-danger"
                      : lead.tag === "Follow up"
                      ? "bg-warning text-dark"
                      : "bg-secondary"
                  }`}
                >
                  {lead.tag}
                </span>
            </td>
            <td>{lead.source}</td>
            <td><img className='border rounded-circle' src="https://cdn.vectorstock.com/i/1000v/30/97/business-man-user-icon-vector-4333097.jpg" alt="" width={'30px'} height={'30px'}/></td>
            <td><span
                  className={`badge ${
                    lead.status === "Customer"
                      ? "bg-success"
                      : lead.status === "Qualified"
                      ? "bg-info text-dark"
                      : lead.status === "Working"
                      ? "bg-primary"
                      : lead.status === "Contacted"
                      ? "bg-warning text-dark"
                      : "bg-secondary"
                  }`}
                >
                  {lead.status}
                </span>
            </td>
            <td style={{fontWeight:'600',color:'grey'}}>{lead.created}</td>
            <td> <EllipsisVertical /></td>
          </tr>

         ))
         }



         </tbody>






        </table>
       
   <div className='d-flex align-items-center justify-content-between border rounded' style={{width:'100%',height:'70px'}}>
      <button className='btn btn-outline-dark ms-4'>   <ArrowLeft />Previous</button>
        <Pagination className='mt-3' color='grey'>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
    
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>
    
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
      </Pagination>
       <button className='btn btn-outline-dark me-4'> Next <ArrowRight /></button>
   </div>










      </div>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>New Lead</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>

            <form>
              <div className="row">
                <div className="col-md-4">
                  <div className='mt-5' style={{ height: '400px', width: '100%' }}>
                            <label htmlFor="eventImg">
                                <input
                                    id='eventImg'
                                    style={{ display: 'none' }}
                                    type="file"
                                   
                                />
                               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png" alt=""  width={'100%'}/>
                            </label>
                        </div>
                </div>
                <div className="col-md-8">
              
               <TextField className='mt-3' id="outlined-read-only-input" label="Lead ID" defaultValue="" />
                <TextField className='ms-3 mt-3' id="outlined-read-only-input" label="Customer" defaultValue="" />
                 <TextField className='mt-3' id="outlined-read-only-input" label="Company" defaultValue="" />
                  <TextField  className='ms-3 mt-3' id="outlined-read-only-input" label="Email" defaultValue="" />
                   <TextField className='mt-3' id="outlined-read-only-input" label="Phone" defaultValue="" />
                    <TextField  className='ms-3 mt-3' id="outlined-read-only-input" label="Value" defaultValue="" />
                     <TextField className='mt-3' id="outlined-read-only-input" label="Tags" defaultValue="" />
                  <TextField  className='ms-3 mt-3' id="outlined-read-only-input" label="Source" defaultValue="" />
                  <TextField className='mt-3' id="outlined-read-only-input" label="Status"  />
                  <TextField  className='ms-3 mt-3' id="outlined-read-only-input" label="Created"  />
                </div>
              </div>
             
              
            </form>





          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Add New Lead
          </Button>
        </Modal.Footer>
      </Modal>
      
    </main>
    
    </div>
   

    
     
       
     
    








     </div>
    </>
  )
}

export default App
