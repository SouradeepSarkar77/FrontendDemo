import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBoldWords]'
})
export class BoldDirective implements OnChanges{

  @Input() appBoldWord: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appBoldWord']) {
      this.boldWord();
    }
  }

  private boldWord(): void {
    const content = this.el.nativeElement.innerText;
    console.log(content);

    if (content && this.appBoldWord) {
      const formattedContent = this.boldWordWithoutRegex(content, this.appBoldWord);
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', formattedContent);
    }
  }

  private boldWordWithoutRegex(content: string, wordToBold: string): string {
    const formattedContent = content.replace(new RegExp(`\\b${wordToBold}\\b`, 'gi'), match => `<span class="bold-word">${match}</span>`);
    return formattedContent;
  }








  // @Input() appBoldWords: string[] = [];

  // @Input() appBoldWord: string = '';
  // constructor(private el: ElementRef) {}

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['appBoldWord']) {
  //     this.boldWord();
  //   }
  // }

  // private boldWords(): void {
  //   const content = this.el.nativeElement.innerText;

  //   if (content && this.appBoldWords.length > 0) {
  //     const regex = new RegExp(`\\b(${this.appBoldWords.join('|')})\\b`, 'gi');
  //     const formattedContent = content.replaceAll(regex, (match: string) => `<strong>${match}</strong>`);
  //     this.el.nativeElement.innerHTML = formattedContent;
  //   }
  // }

  // private boldWords(): void {
  //   const content = this.el.nativeElement.innerText;

  //   if (content && this.appBoldWords.length > 0) {
  //     const wordsToBold = this.appBoldWords.map(word => '\\b' + word + '\\b');
  //     const formattedContent = this.boldWordsWithoutRegex(content, wordsToBold);
  //     this.el.nativeElement.innerHTML = formattedContent;
  //   }
  // }

  // private boldWordsWithoutRegex(content: string, wordsToBold: string[]): string {
  //   let formattedContent = content;

  //   wordsToBold.forEach(word => {
  //     formattedContent = formattedContent.split(word).join(`<strong>${word}</strong>`);
  //   });

  //   return formattedContent;
  // }

  // private boldWord(): void {
  //   const content = this.el.nativeElement.innerText;

  //   if (content && wordToBold) {
  //     const formattedContent = this.boldWordWithoutRegex(content, wordToBold);
  //     this.el.nativeElement.innerHTML = formattedContent;
  //   }
  // }

  // private boldWordWithoutRegex(content: string, wordToBold: string): string {
  //   const formattedContent = content.replace(new RegExp(`\\b${wordToBold}\\b`, 'gi'), `<strong>${wordToBold}</strong>`);
  //   return formattedContent;
  // }

  // private boldWord(): void {
  //   const content = this.el.nativeElement.innerText;

  //   if (content && this.appBoldWord) {
  //     const formattedContent = this.boldWordWithoutRegex(content, this.appBoldWord);
  //     this.el.nativeElement.innerHTML = formattedContent;
  //   }
  // }

  // private boldWordWithoutRegex(content: string, wordToBold: string): string {
  //   const formattedContent = content.split(wordToBold).join(`<strong>${wordToBold}</strong>`);
  //   return formattedContent;
  // }

  // private boldWord(): void {
  //   const content = this.el.nativeElement.innerText;
  //   console.log(content);

  //   if (content && this.appBoldWord) {
  //     const formattedContent = content.split(this.appBoldWord).join(`<strong>${this.appBoldWord}</strong>`);
  //     this.el.nativeElement.innerHTML = formattedContent;
  //   }
  // }
}
