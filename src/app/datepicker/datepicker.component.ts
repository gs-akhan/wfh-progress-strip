import { Component, OnInit } from '@angular/core';
import getISOWeek from 'date-fns/getISOWeek';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  date = null;
   isEnglish = false;
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  constructor(private i18n: NzI18nService) { 
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
  }

  ngOnInit(): void {
  }
  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }

}
