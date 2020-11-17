import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import domToImage from 'dom-to-image';
import { TwitterService } from './../twitter.service';
import { ITweetPrettyDto } from './tweet-pretty-dto';

@Component({

  selector: 'app-tweet-pretty',
  templateUrl: './tweet-pretty.component.html',
  styleUrls: ['./tweet-pretty.component.css']
})
export class TweetPrettyComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  tweetUrl: string;
  tweetInfo: ITweetPrettyDto;

  graphicPatterns;
  responsiveOptions;

  selectedPattern: string;
  selectedBackgroundColor: string;
  selectedBackgroundTweetColor: string;
  selectedTextTweetColor: string;

  constructor(private twitterService: TwitterService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 6,
        numScroll: 6
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.graphicPatterns = [
      {
        name: 'wavy.jpg'
      },
      {
        name: 'wavy2.jpg'
      },
      {
        name: 'wavy3.jpg'
      },
      {
        name: 'cubes.jpg'
      },
      {
        name: 'fishnet.jpg'
      },
      {
        name: 'floral.jpg'
      },
      {
        name: 'houndtooth.jpg'
      },
      {
        name: 'leaves.jpg'
      },
      {
        name: 'mod.jpg'
      },
      {
        name: 'nature.jpg'
      },
      {
        name: 'stainedglass.jpg'
      },
      {
        name: 'stripes.jpg'
      },
      {
        name: 'fishnet.jpg'
      },
      {
        name: 'zigzag.jpg'
      },
      {
        name: 'zigzag2.jpg'
      },
      {
        name: 'zigzag3.jpg'
      },
      {
        name: 'hearts.jpg'
      },
      {
        name: 'hearts2.jpg'
      },
      {
        name: 'hearts3.jpg'
      },
      {
        name: 'multicolor.jpg'
      },
      {
        name: 'swirl.jpg'
      },
      {
        name: 'mod2.jpg'
      },
      {
        name: 'flowers.jpg'
      },
      {
        name: 'flowers2.jpg'
      },
      {
        name: 'argyle.jpg'
      },
      {
        name: 'retrostars.jpg'
      },
      {
        name: 'diagstripe.jpg'
      },
      {
        name: 'snoflakesred.jpg'
      },
      {
        name: 'snoflakesblue.jpg'
      },
      {
        name: 'flowerpower.jpg'
      },
      {
        name: 'wavylinesblue.jpg'
      },
      {
        name: 'wavylinesearth.jpg'
      },
      {
        name: 'ropecircles.jpg'
      },
      {
        name: 'modsquares.jpg'
      },
      {
        name: 'modgreen.jpg'
      },
      {
        name: 'smallswirl.jpg'
      },
      {
        name: 'nowords.jpg'
      },
      {
        name: 'modsquaresaqua.jpg'
      },
      {
        name: 'animalprint.jpg'
      },
      {
        name: 'bluedaisy.jpg'
      },
      {
        name: 'raindrops.jpg'
      },
      {
        name: 'camo.jpg'
      },
      {
        name: 'flannelshirt.jpg'
      },
      {
        name: 'shell.jpg'
      },
      {
        name: 'bluelizard.jpg'
      },
      {
        name: 'escher.jpg'
      }
    ]
    this.selectedPattern = this.graphicPatterns[0].name;
    this.selectedBackgroundColor = "#FFFFFF";
    this.selectedBackgroundTweetColor = "#FFFFFF";
    this.selectedTextTweetColor = "#000000";

  }

  ngOnInit(): void {

    this.tweetInfo = null;
  }

  getTweetInfo(tweetUrl: string) {

    this.twitterService.getTweetFromWebApi(tweetUrl)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.tweetInfo = data;
        if (this.tweetInfo.tweetedphotourl != null) {
          this.tweetInfo.tweetedphotourl = this.tweetInfo.tweetedphotourl + '?name=small'
        }

      }
      );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  saveToImage() {
    domToImage.toJpeg(document.getElementById('tweetpretty'), { quality: 0.95 })
      // tslint:disable-next-line:only-arrow-functions
      .then(function(dataUrl) {
        const link = document.createElement('a');
        link.download = 'tweetpretty.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }

  patternSelected(name: string) {
    this.selectedPattern = name;
  }

  backgroundColorSelected(ev: any) {
    if (ev.value) {
      this.selectedPattern = null;
      this.selectedBackgroundColor = ev.value;
    }
  }

  backgroundTweetColorSelected(ev: any) {
    if (ev.value) {
      this.selectedBackgroundTweetColor = ev.value;
    }
  }

  textTweetColorSelected(ev: any) {
    if (ev.value) {
      this.selectedTextTweetColor = ev.value;
    }
  }
}
