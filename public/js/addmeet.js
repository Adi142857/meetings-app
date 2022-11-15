const formmeet=document.getElementById('form-addm');
const mailattendee=document.getElementById('emailattendee');
const desc=document.getElementById('form-desc');
const date=document.getElementById('meet-date');
const startHour=document.getElementById('starth');
const startMin=document.getElementById('startm');
const endHour=document.getElementById('endh');
const endMin=document.getElementById('endm');

formmeet.addEventListener('submit', (e) => {
    e.preventDefault();
    const descval=desc.value;
    const mailval=mailattendee.value;
    const dateval=date.value;
    const startHourval=startHour.value;
    const startMinval=startMin.value;
    const endHourval=endHour.value;
    const endMinval=endMin.value;
    const meetval={
        desc:descval,
        mail:{
            mail:mailval,
        },
        date:dateval,
        start:{
            hour:startHourval,
            min:startMinval
        },
        end:{
            hour:endHourval,
            min:endMinval
        }
    }
    console.log(meetval);

});

