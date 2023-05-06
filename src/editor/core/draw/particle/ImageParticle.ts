import { IEditorOption } from '../../../interface/Editor'
import { IElement } from '../../../interface/Element'
import { Draw } from '../Draw'

export class ImageParticle {

  private draw: Draw
  protected options: Required<IEditorOption>
  protected imageCache: Map<string, HTMLImageElement>

  constructor(draw: Draw) {
    this.draw = draw
    this.options = draw.getOptions()
    this.imageCache = new Map()
  }

  protected addImageObserver(promise: Promise<unknown>) {
    this.draw.getImageObserver().add(promise)
  }

  public render(ctx: CanvasRenderingContext2D, element: IElement, x: number, y: number) {
    const { scale } = this.options
    const width = element.width! * scale
    const height = element.height! * scale
    if (this.imageCache.has(element.id!)) {
      const img = this.imageCache.get(element.id!)!
      ctx.drawImage(img, x, y, width, height)
    } else {
      const imageLoadPromise = new Promise((resolve, reject) => {
        const img = new Image()
        img.setAttribute('crossOrigin', 'Anonymous')
        img.src = element.value
        img.onload = () => {
          ctx.drawImage(img, x, y, width, height)
          this.imageCache.set(element.id!, img)
          resolve(element)
        }
        img.onerror = (error) => {
          reject(error)
        }
      })
      this.addImageObserver(imageLoadPromise)
    }
  }

}