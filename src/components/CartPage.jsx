import { useEffect, useState } from 'react'
import {
  CART_UPDATED_EVENT,
  clearCart,
  createWhatsAppOrderUrl,
  formatINR,
  getCartCount,
  getCartItems,
  getCartTotal,
  removeCartItem,
} from '../utils/cart'

export default function CartPage() {
  const [cartItems, setCartItems] = useState(() => getCartItems())

  useEffect(() => {
    const updateCart = () => setCartItems(getCartItems())

    updateCart()
    window.addEventListener(CART_UPDATED_EVENT, updateCart)
    window.addEventListener('storage', updateCart)

    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, updateCart)
      window.removeEventListener('storage', updateCart)
    }
  }, [])

  const cartCount = getCartCount(cartItems)
  const cartTotal = getCartTotal(cartItems)

  const placeOrder = () => {
    if (cartItems.length === 0) return
    window.open(createWhatsAppOrderUrl(cartItems), '_blank', 'noopener,noreferrer')
  }

  const navigateTo = (href) => {
    window.history.pushState({}, '', href)
    window.dispatchEvent(new Event('arulmathi:navigate'))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="cart-page" className="min-h-screen bg-[#f6efe4] px-5 py-32 text-[#17131c] sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 border-b border-[#d9b77d] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#b57922]">Your Order</p>
            <h1 className="mt-3 font-serif text-[40px] font-normal leading-tight sm:text-[54px]">Shopping Bag</h1>
            <p className="mt-3 max-w-[620px] font-sans text-[14px] leading-[1.8] text-[#5f5660]">
              Review your selected sarees clearly before placing the order enquiry on WhatsApp.
            </p>
          </div>
          {cartItems.length > 0 && (
            <button type="button" onClick={clearCart} className="self-start rounded border border-[#b57922] px-5 py-3 font-sans text-[10px] font-bold uppercase tracking-[1.8px] text-[#9a6720] transition-colors hover:bg-[#b57922] hover:text-white sm:self-auto">
              Clear Bag
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="mt-12 rounded-lg border border-[#d9b77d] bg-[#fffaf2] px-6 py-14 text-center shadow-[0_20px_50px_rgba(116,73,28,0.10)]">
            <i className="fas fa-bag-shopping text-[38px] text-[#b57922]" />
            <h2 className="mt-5 font-serif text-[30px] font-normal">No sarees in your bag</h2>
            <a href="/#collections" className="mt-7 inline-flex items-center gap-3 rounded bg-[#b57922] px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-[1.8px] text-white transition-colors hover:bg-[#d9a046]">
              Explore Collections <i className="fas fa-arrow-right" />
            </a>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-5">
              {cartItems.map((item) => {
                const itemTotal = (Number(item.unitPrice) || 0) * (Number(item.quantity) || 0)
                const itemUrl = item.url || '/cart'

                return (
                  <article key={item.id} className="grid grid-cols-1 overflow-hidden rounded-lg border border-[#d9b77d] bg-[#fffaf2] shadow-[0_18px_44px_rgba(74,45,18,0.10)] sm:grid-cols-[190px_1fr]">
                    <button type="button" onClick={() => navigateTo(itemUrl)} className="block h-[220px] w-full overflow-hidden bg-[#eadfce] text-left sm:h-full">
                      <img src={item.image} alt={item.name} loading="lazy" decoding="async" className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105" />
                    </button>
                    <div className="p-5">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="font-sans text-[10px] font-bold uppercase tracking-[2px] text-[#b57922]">{item.code}</p>
                          <button type="button" onClick={() => navigateTo(itemUrl)} className="mt-2 block text-left font-serif text-[25px] font-normal leading-tight text-[#17131c] transition-colors hover:text-[#b57922]">
                            {item.name}
                          </button>
                          <p className="mt-3 font-sans text-[13px] leading-[1.7] text-[#5f5660]">{item.collectionName} | {item.color}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button type="button" onClick={() => navigateTo(itemUrl)} className="self-start rounded-full border border-[#b57922] px-3 py-2 font-sans text-[10px] font-bold uppercase tracking-[1.4px] text-[#8a5c1f] hover:bg-[#b57922] hover:text-white">
                            View Details
                          </button>
                          <button type="button" onClick={() => removeCartItem(item.id)} className="self-start rounded-full border border-[#d9b77d] px-3 py-2 font-sans text-[10px] font-bold uppercase tracking-[1.4px] text-[#8a5c1f] hover:bg-[#f3e0c8]">
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[#e5ceb0] pt-5 font-sans text-[12px]">
                        <div>
                          <span className="block text-[#7a6f79]">Unit price</span>
                          <strong className="mt-1 block text-[#17131c]">{item.price}</strong>
                        </div>
                        <div>
                          <span className="block text-[#7a6f79]">Quantity</span>
                          <strong className="mt-1 block text-[#17131c]">{item.quantity}</strong>
                        </div>
                        <div>
                          <span className="block text-[#7a6f79]">Total</span>
                          <strong className="mt-1 block text-[#17131c]">{formatINR(itemTotal)}</strong>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <aside className="h-max rounded-lg border border-[#d4a863] bg-[#fffaf2] p-6 shadow-[0_20px_50px_rgba(116,73,28,0.12)]">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[2.4px] text-[#b57922]">Order Summary</p>
              <div className="mt-5 space-y-3 border-b border-[#e5ceb0] pb-5 font-sans text-[13px] text-[#514853]">
                <div className="flex justify-between"><span>Total sarees</span><strong>{cartCount}</strong></div>
                <div className="flex justify-between"><span>Estimated total</span><strong>{formatINR(cartTotal)}</strong></div>
              </div>
              <button type="button" onClick={placeOrder} className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded bg-[#25d366] px-5 py-3.5 font-sans text-[11px] font-bold uppercase tracking-[1.8px] text-[#07140b] transition-colors hover:bg-[#5af08c]">
                Place Order on WhatsApp <i className="fab fa-whatsapp text-[15px]" />
              </button>
              <p className="mt-4 font-sans text-[11px] leading-[1.7] text-[#6b6470]">
                The WhatsApp message includes your order ID, saree code, collection, color, quantity, and total.
              </p>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}
