import alert from '../../assets/img/alert.png';
import AccordionItem from './AccordionItem';
import './style.scss';
function Accordion(props) {

    

    
    return (
        <div className="accordion accordion-center">
            <AccordionItem src={alert} content="Connected Devices" error={"2 issuses to"} id="1" alert='fix now' />
            <AccordionItem src={alert} content = "Connected Devices" error={""} id = "2" alert=''  />
            <AccordionItem src={alert} content="Connected Devices" error={"6 issuses to"} id="3" alert='fix now' />
            <AccordionItem src={alert} content = "Connected Devices" error={"8 issuses to"} id = "4" alert='fix now'  />
            
        </div>
    );
}

export default Accordion;