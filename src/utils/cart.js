const CART_STORAGE_KEY = 'arulmathi_cart_items'
export const CART_UPDATED_EVENT = 'arulmathi:cart-updated'
export const WHATSAPP_ORDER_NUMBER = '917010452034'

const readCartItems = () => {
  if (typeof window === 'undefined') return []

  try {
    const parsed = JSON.parse(window.localStorage.getItem(CART_STORAGE_KEY) || '[]')
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const writeCartItems = (items) => {
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  window.dispatchEvent(new CustomEvent(CART_UPDATED_EVENT, { detail: items }))
}

export const getCartItems = readCartItems

export const getCartCount = (items = readCartItems()) =>
  items.reduce((total, item) => total + (Number(item.quantity) || 0), 0)

export const getCartTotal = (items = readCartItems()) =>
  items.reduce((total, item) => total + (Number(item.unitPrice) || 0) * (Number(item.quantity) || 0), 0)

export const addCartItem = (item) => {
  const items = readCartItems()
  const existingIndex = items.findIndex((cartItem) => cartItem.id === item.id)

  if (existingIndex >= 0) {
    items[existingIndex] = {
      ...items[existingIndex],
      quantity: (Number(items[existingIndex].quantity) || 0) + (Number(item.quantity) || 1),
    }
  } else {
    items.push(item)
  }

  writeCartItems(items)
  return items
}

export const addDesignToCartAndOpenCart = ({ collection, design, color, quantity, image }) => {
  if (!collection || !design) return

  const selectedColor = color || design.color || ''
  const unitPrice = Number((design.price || '').replace(/[^0-9]/g, '')) || 0

  addCartItem({
    id: `${collection.slug}/${design.slug}/${selectedColor}`,
    collectionSlug: collection.slug,
    collectionName: collection.name,
    designSlug: design.slug,
    name: design.name,
    code: design.code,
    color: selectedColor,
    price: design.price,
    unitPrice,
    quantity: Number(quantity) || 1,
    image: image || design.image,
    url: window.location.pathname,
  })

  window.history.pushState({}, '', '/cart')
  window.dispatchEvent(new Event('arulmathi:navigate'))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const removeCartItem = (id) => {
  const items = readCartItems().filter((item) => item.id !== id)
  writeCartItems(items)
  return items
}

export const clearCart = () => {
  writeCartItems([])
}

export const formatINR = (value) =>
  Number(value || 0).toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  })

export const createOrderId = () => {
  const date = new Date()
  const stamp = date.toISOString().slice(0, 10).replace(/-/g, '')
  const random = Math.random().toString(36).slice(2, 7).toUpperCase()
  return `ARU-${stamp}-${random}`
}

export const createWhatsAppOrderUrl = (items, orderId = createOrderId()) => {
  const total = getCartTotal(items)
  const lines = [
    `Order ID: ${orderId}`,
    'Arulmathi Silks saree order enquiry',
    '',
    ...items.flatMap((item, index) => [
      `${index + 1}. ${item.name}`,
      `Code: ${item.code}`,
      `Collection: ${item.collectionName}`,
      `Color: ${item.color}`,
      `Quantity: ${item.quantity}`,
      `Unit Price: ${item.price}`,
      `Total: ${formatINR((Number(item.unitPrice) || 0) * (Number(item.quantity) || 0))}`,
      '',
    ]),
    `Estimated Order Total: ${formatINR(total)}`,
    '',
    'Please confirm availability, final invoice, shipping, and payment details.',
  ]

  return `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
}
