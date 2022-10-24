import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction' // a plugin!
const handleDateClick = (arg) => {
    console.log(arg);
    console.log("dasdasd");
    // new bootstrap.Modal('#exampleModal')
}

const FullCal = () => {
    return <>
        <FullCalendar
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            plugins={[dayGridPlugin, interactionPlugin]}
            // weekends={false}
            dateClick={handleDateClick}
            events={[
                { title: 'event 1', date: '2022-10-23' },
                { title: 'dd 1', date: '2022-10-23' },
                { title: 'event 2', date: '2022-10-24' }
            ]}
            initialView="dayGridMonth"
        />

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default FullCal