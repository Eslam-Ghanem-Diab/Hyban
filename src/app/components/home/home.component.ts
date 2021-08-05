import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cashView: boolean = false
  burn: boolean = true;
  dataArr: string[] = [];

  // dataArr = [
  // 'McDonald’s',
  // 'Last 24 hours',
  // 'Nasr City'
  // ]
  constructor() { }


  ngOnInit(): void {
    setTimeout(() => {
      this.rr()

    }, 200);
  }

  sortinItems(e: any) {
    e.target.parentNode.remove()
  }

  arrSortinItems(index: number) {
    this.dataArr.splice(index, 1);
  }
  resetAll() {
    this.dataArr = []
  }

  rr() {
    const select = document.querySelectorAll('.selectBtn');
    const option = document.querySelectorAll('.option');
    let index = 1;

    select.forEach(a => {
      a.addEventListener('click', b => {
        const element_target = b.target as HTMLTextAreaElement
        const next = element_target?.nextElementSibling;

        next?.classList.toggle('toggle');
        const nextHtml = next as HTMLElement
        nextHtml?.setAttribute("style", `zIndex:${index++};`);
        // style.zIndex = index++;
      })
    })
    option.forEach(a => {
      a.addEventListener('click', b => {
        const targetElement = b.target as HTMLElement
        targetElement?.parentElement?.classList.remove('toggle');
        const parent = targetElement?.closest('.select')?.children[0] as HTMLElement;
        parent.setAttribute('data-type', targetElement?.getAttribute('data-type') as string);
        parent.innerText = targetElement?.innerText;
      })
    })


  }
  addToSortinList(e: Event) {
    let choose = e.target as HTMLElement
    this.dataArr = [];
    this.dataArr.push(choose.innerHTML)
  }

}
