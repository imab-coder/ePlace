import { Component, OnInit, HostListener, Inject } from '@angular/core';
import * as $ from 'jquery';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task4';
  innerWidth: string;

  ngOnInit() {
    $(function () {
      $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
          $('.navbar').addClass('navbar-bg');
          $('.nav-link').css('color', '#666666');
        } else {
          $('.navbar').removeClass('navbar-bg');
          $('.nav-link').css('color', '#fff');
        }
      });

      $('.slide').hide();

      $(window).on('scroll', function () {
        if ($(window).scrollTop() > 250) {
          $('.slide').addClass('in-left');
          $('.slide').show();
        }
      });

      $('.up').hide();
      $('.tc').hide();

      $(window).on('scroll', function () {
        if ($(window).scrollTop() > 750) {
          $('.tc').addClass('in-left');
          $('.up').addClass('in-up');
          $('.tc').show();
          $('.up').show();
        }
      });

      
      $('.up1').hide();

      $(window).on('scroll', function () {
        if ($(window).scrollTop() > 1300) {
          $('.up1').addClass('in-up');
          $('.up1').show();
        }
      });
    });

    $(document).ready(function () {
      $('.nav-link').click(function () {
        $('.nav-link').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
          $this.addClass('active');
          $this.css('color', 'white');

        }
      });
    });
  }
}
