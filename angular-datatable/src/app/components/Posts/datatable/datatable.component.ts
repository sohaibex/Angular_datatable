import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';


declare var $: any;
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  constructor() { }

  dtOptions: any = {};

  ngOnInit(): void {
    // this.dtOptions = {
    //   // responsive: true,
    //   pagingType: 'full_numbers',

    //   // Declare the use of the extension in the dom parameter
    //   dom: 'Bfrtip',
    //   // Configure the buttons
    //   buttons: [
    //     'pdf',
    //     'copy',
    //     'print',
    //     'excel',
    //     {
    //       text: 'Some button',
    //       key: '1',
    //       action: function (e, dt, node, config) {
    //         alert('Button activated');
    //       }
    //     }
    //   ],
    //   responsive: true,

    // };


    this.dtOptions = {
      ajax: 'data.json',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName',
        class: 'none'
      }],
      // Use this attribute to enable the responsive extension
      responsive: true
    };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;




    // var table = $('#example').DataTable();
    // $('#example tbody').on('click', 'td.details-control', function () {
    //   var tr = $(this).closest('tr');
    //   var row = table.row(tr);
    //   if (row.child.isShown()) {
    //     // This row is already open - close it
    //     row.child.hide();
    //     tr.removeClass('shown');
    //   }
    //   else {
    //     // Open this row
    //     row.child('<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;"><tr><td>Full name:</td><td>Ajay</td></tr></table>').show();
    //     tr.addClass('shown');
    //   }
    // });





  }





}
