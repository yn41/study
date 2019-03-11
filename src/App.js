import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/reset.scss';
import ViewerTemplate from "./components/ViewerTemplate";
import SpaceNavi from "./components/SpaceNavi";
import Viewer from "./components/Viewer";
import moment from 'moment';

import * as api from './lib/api'

class App extends Component {
  state ={
    loading: false,
    maxDate:null,
    date: null,
    url:null,
    mediaType:null
  }
  getAPOD = async (date) =>{
    const targetDate = date;
    if(this.state.loading) return;// loading true이면 이미 요청 중!
    this.setState({
      loading:true
    });
    try {
      //api 연결 시작!
      const response = await api.getAPOD(targetDate); 
      console.log(response);
      //비구조 할당 + 새로운 이름
      const {date: date, url, media_type:mediaType} = response.data; // date, url, media_type => api 받아오는 값 
      // console.log(date, url, mediaType);

      // maxDate가 없으면 지금 받은 값으로 지정
      if(!this.maxDate){
          this.setState({
            maxDate:date
          });
      }
      
      this.setState({ //이름이 같으면 자동으로 들어감
        date,
        mediaType,
        url
      });
      console.log(this.state);

    } catch (e) {
      //에러 시
      console.log(e);
    }
    
    //api 연결 종료!
    this.setState({
      loading:false
    });
  }
  componentDidMount(){
    const date = moment().format('YYYY-MM-DD');
    this.getAPOD(date);
  }
  handlePrev = ()=>{
    const {date} = this.state;
    const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    console.log(prevDate);
    this.getAPOD(prevDate);

  }
  handleNext =()=>{
    const {date} = this.state;
    const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
    if(nextDate === moment().add(1, 'days').format('YYYY-MM-DD')){
      alert("내일 사진은 미리 볼 수 없습니다!!\n내일 확인해주세요!!");
      return;
    }
    this.getAPOD(nextDate);
  }
  render() {
    const {url, mediaType, loading} = this.state;
    const {handlePrev, handleNext} = this;
    return (
      <> 
        {/* div 대신 Fragment, <></> 쓰면 클릭 이벤트시 오류 */}
        <ViewerTemplate
          viewer={<Viewer 
            url={url}
            mediaType={mediaType}
            loading={loading}
          />} 
          spaceNavi={<SpaceNavi onPrev={handlePrev} onNext={handleNext}/>}/>
      </>
    );
  }
}
export default App;