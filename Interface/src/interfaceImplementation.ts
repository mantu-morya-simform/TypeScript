console.log("Interface Implementation...");
console.log("");

/**
 * Interface defining photo-taking capabilities.
 */
interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

/**
 * Instagram class implementing TakePhoto interface.
 */
class Instagram implements TakePhoto {
  public cameraMode: string;
  public filter: string;
  public burst: number;
  constructor(cameraMode: string, filter: string, burst: number) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
  }
}

// you can add more then but not less then properties into our interface

/**
 * Interface for story creation functionality.
 */
interface Story {
  createStory(): void;
}

/**
 * YouTube class implementing TakePhoto and Story interfaces.
 */
class Youtoube implements TakePhoto, Story {
  public cameraMode: string;
  public filter: string;
  public burst: number;
  public short: string;
  constructor(
    cameraMode: string,
    filter: string,
    burst: number,
    short: string,
  ) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
    this.short = short;
  }

  createStory() {
    console.log("Create Story");
  }
}

/**
 * Abstract class for photo-taking with abstract method.
 */
abstract class TakePhoto1 {
  // we cant create the object for the abstract class
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
  ) {}

  abstract imageClicked(): void;
}

/**
 * Instagram1 class extending TakePhoto1 abstract class.
 */
class Instagram1 extends TakePhoto1 {
  public cameraMode: string;
  public filter: string;
  public burst: number;
  public isSound: boolean;
  constructor(
    cameraMode: string,
    filter: string,
    burst: number,
    isSound: boolean,
  ) {
    super(cameraMode, filter, burst);
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
    this.isSound = isSound;
  }

  imageClicked(): void {
    console.log("Image Is Clicked...");
  }
}

const insta = new Instagram1("selfi", "carlo", 50, true);
console.log(insta);
insta.imageClicked();

// console.log(" ");
