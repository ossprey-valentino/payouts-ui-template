const payouts = [
  { id: 'PO-1041', payee: 'Northwind Ltd', amount: 1240.5, status: 'pending' },
  { id: 'PO-1042', payee: 'Contoso GmbH', amount: 980.0, status: 'approved' },
]

const table = document.getElementById('payouts')
table.innerHTML = payouts
  .map((p) => `<tr><td>${p.id}</td><td>${p.payee}</td><td>${p.amount.toFixed(2)}</td><td>${p.status}</td></tr>`)
  .join('')

const pending = payouts.filter((p) => p.status === 'pending').length
document.getElementById('summary').textContent = `${payouts.length} payouts, ${pending} pending`
