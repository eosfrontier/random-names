const { DefaultAmount, Factions, MaxAmount } = require("../config");
const fs = require('fs')

const _checkFaction = (faction = '') => Factions.includes(faction.toLowerCase())
const _enforceNumber = (input) => {
  const amount = parseInt(input)
  return (amount && typeof amount === "number") ? amount : DefaultAmount
}
const _enforceLimit = (amount = DefaultAmount) => amount > MaxAmount ? MaxAmount : amount
const _parseQuery = (query) => {
  return {
    amount: _enforceLimit(_enforceNumber(query.amount)),
    faction: (_checkFaction(query.faction) ? query.faction : "aquila").toLowerCase()
  }
}

const _loadFactionList = (factionName) => {
  console.log(fs.existsSync(`./namelists/${factionName}.json`))
}

function testQuery(query = {}) {
  const cleanQuery = _parseQuery(query)
  _loadFactionList(cleanQuery.faction);
}

module.exports = {
  testQuery
}
