import Layout from "../../globals/Layout";
import './Calendar.css';

const iFrame = '<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=em90Ym90aWNzQGdtYWlsLmNvbQ&amp;src=aTRtajFqcm0xMHE3OTAwdTNvZDJxZmFhZWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23039BE5&amp;color=%23795548&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=1" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>'

const Calendar = () => {
    return (
        <Layout>
            <h1 className = "header-text" >Check out our upcoming events!</h1>
            <div className = "calendar" dangerouslySetInnerHTML={{__html: iFrame}}></div>
        </Layout>
    );
}

export default Calendar;