<template>
<div>
    <div>
        <label>
            <select v-model.number="year">
                <option v-for="item in years" :key="item">{{item}}</option>
            </select>
        </label>
        <label>
            <select v-model.number="month">
                <option v-for="item in months" :key="item*200">{{item}}</option>
            </select>
        </label>
    </div>
    <div class="calendar-container">
        <span v-for="(week,index) in weeks" :key="index">{{week}}</span>
        <span v-for="date in dates" :key="date.id" :class="date.class">{{date.date}}</span>
    </div>
</div>
</template>

<script>
    import {getWeekNumber,getSumDay} from "@/utils/calender";

    let years=[],months=[]
    let date=new Date()
    let nowYear=date.getFullYear()
    let nowMonth=date.getMonth()+1
    for(let i=20;i>0;i--){
        years.push(nowYear-i)
    }
    for(let i=0;i<20;i++){
        years.push(nowYear+i)
    }
    for(let i=0;i<12;i++){
        months.push(i+1)
    }
    export default {
        name: "CalendarPage",
        data(){
            return {
                weeks:['日','一','二','三','四','五','六'],
                year:nowYear,
                month:nowMonth,
                startDate:1,
                years:years,
                months:months,
                s:2222,

            }
        },
        computed:{
            startDay(){
                return getWeekNumber(this.year,this.month,this.startDate)
            },
            endDay(){
                return getWeekNumber(this.year,this.month,this.endDate)
            },
            endDate(){
                return getSumDay(this.year,this.month)
            },
            dates(){
                let arr=[]
                let lastDay
                let id=100
                if(this.month-1<1) {
                    lastDay=getSumDay(this.year-1,12)
                }else if(this.month+1>12){
                    lastDay=getSumDay(this.year,this.month-1)
                }else {
                    lastDay=getSumDay(this.year,this.month-1)
                }

                for(let i=this.startDay-1;i>=0;i--){
                    arr.push({id:id++,date:lastDay-i,class:'fox'})
                }
                for(let i=1;i<=getSumDay(this.year,this.month);i++){
                    arr.push({id:id++,date:i})
                }
                for (let i=1;i<=6-this.endDay;i++){
                    arr.push({id:id++,date:i,class:'fox'})
                }
                return arr
            }
        },

    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
.calendar-container{
    display: grid;
    width: 500px;
    grid-template-columns: auto auto auto auto auto auto auto ;
    background-color: #c3c3c3;
    padding: 10px;
}
.calendar-container span{
    text-align: center;
    border: 1px black solid;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px;
    font-size: 30px;
}
    .fox{
        color: gray;
    }
</style>
