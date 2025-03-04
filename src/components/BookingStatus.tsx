import { useState } from 'react';
import { Check, X, Building, Home, ChevronDown, ChevronUp } from 'lucide-react';

function BookingStatus() {
  const [activeFloor, setActiveFloor] = useState('1');
  const [activeWing, setActiveWing] = useState('all');
  const [showSummary, setShowSummary] = useState(true);

  // Define all floors including ground floor
  const floors = [
    { id: 'G', name: 'Ground' },
    { id: '1', name: '1st Floor' },
    { id: '2', name: '2nd Floor' },
    { id: '3', name: '3rd Floor' },
    { id: '4', name: '4th Floor' },
    { id: '5', name: '5th Floor' },
    { id: '6', name: '6th Floor' },
    { id: '7', name: '7th Floor' },
  ];

  // Define wings
  const wings = [
    { id: 'all', name: 'All Wings' },
    { id: 'A', name: 'A Wing' },
    { id: 'B', name: 'B Wing' },
    { id: 'C', name: 'C Wing' },
    { id: 'D', name: 'D Wing' },
  ];

  // Sample data for units by floor and wing
  // Status can be: 'available', 'sold', 'reserved'
  const unitData = {
    'G': {
      'A': [
        { id: '1', number: '1', type: 'Shop', status: 'sold' },
        { id: '2', number: '2', type: 'Shop', status: 'sold' },
        { id: '3', number: '3', type: 'Shop', status: 'sold' },
        { id: '4', number: '4', type: 'Shop', status: 'sold' },
        { id: '001', number: '5', type: '2 BHK', status: 'sold' },
      ],
      'B': [
        { id: '001', number: '001', type: '2 BHK', status: 'available' },
        { id: '002', number: '002', type: '3 BHK', status: 'available' },
      ],
      'C': [],
      'D': [],
    },
    '1': {
      'A': [
        { id: 'A101', number: '101', type: '2 BHK', status: 'sold' },
        { id: 'A102', number: '102', type: '2 BHK', status: 'available' },
        { id: 'A103', number: '103', type: '3 BHK', status: 'sold' },
        { id: 'A104', number: '104', type: '2 BHK', status: 'sold' },
      ],
      'B': [
        { id: 'B101', number: '101', type: '2 BHK', status: 'available' },
        { id: 'B102', number: '102', type: '3 BHK', status: 'available' },
        { id: 'B103', number: '103', type: '2 BHK', status: 'sold' },
        { id: 'B104', number: '104', type: '2 BHK', status: 'sold' },
      ],
      'C': [
        { id: 'C101', number: '101', type: '3 BHK', status: 'available' },
        { id: 'C102', number: '102', type: '3 BHK', status: 'available' },
        { id: 'C103', number: '103', type: '3 BHK', status: 'available' },
      ],
      'D': [
        { id: 'D101', number: '101', type: '3 BHK', status: 'available' },
        { id: 'D102', number: '102', type: '3 BHK', status: 'sold' },
      ],
    },
    '2': {
      'A': [
        { id: 'A201', number: '201', type: '2 BHK', status: 'sold' },
        { id: 'A202', number: '202', type: '2 BHK', status: 'sold' },
        { id: 'A203', number: '203', type: '3 BHK', status: 'sold' },
        { id: 'A204', number: '204', type: '2 BHK', status: 'sold' },
      ],
      'B': [
        { id: 'B201', number: '201', type: '2 BHK', status: 'sold' },
        { id: 'B202', number: '202', type: '3 BHK', status: 'available' },
        { id: 'B203', number: '203', type: '2 BHK', status: 'sold' },
        { id: 'B204', number: '204', type: '2 BHK', status: 'sold' },
      ],
      'C': [
        { id: 'C201', number: '201', type: '3 BHK', status: 'available' },
        { id: 'C202', number: '202', type: '3 BHK', status: 'available' },
        { id: 'C203', number: '203', type: '3 BHK', status: 'available' },
      ],
      'D': [
        { id: 'D201', number: '201', type: '3 BHK', status: 'available' },
        { id: 'D202', number: '202', type: '3 BHK', status: 'sold' },
      ],
    },
    '3': {
      'A': [
        { id: 'A301', number: '301', type: '2 BHK', status: 'available' },
        { id: 'A302', number: '302', type: '2 BHK', status: 'sold' },
        { id: 'A303', number: '303', type: '3 BHK', status: 'sold' },
        { id: 'A304', number: '304', type: '2 BHK', status: 'available' },
      ],
      'B': [
        { id: 'B301', number: '301', type: '2 BHK', status: 'available' },
        { id: 'B302', number: '302', type: '3 BHK', status: 'available' },
        { id: 'B303', number: '303', type: '2 BHK', status: 'available' },
        { id: 'B304', number: '304', type: '2 BHK', status: 'sold' },
      ],
      'C': [
        { id: 'C301', number: '301', type: '3 BHK', status: 'sold' },
        { id: 'C302', number: '302', type: '3 BHK', status: 'available' },
        { id: 'C303', number: '303', type: '3 BHK', status: 'available' },
      ],
      'D': [
        { id: 'D301', number: '301', type: '3 BHK', status: 'available' },
        { id: 'D302', number: '302', type: '3 BHK', status: 'sold' },
      ],
    },
    '4': {
      'A': [
        { id: 'A401', number: '401', type: '2 BHK', status: 'available' },
        { id: 'A402', number: '402', type: '2 BHK', status: 'sold' },
        { id: 'A403', number: '403', type: '3 BHK', status: 'sold' },
        { id: 'A404', number: '404', type: '2 BHK', status: 'sold' },
      ],
      'B': [
        { id: 'B401', number: '401', type: '2 BHK', status: 'available' },
        { id: 'B402', number: '402', type: '3 BHK', status: 'available' },
        { id: 'B403', number: '403', type: '2 BHK', status: 'available' },
        { id: 'B404', number: '404', type: '2 BHK', status: 'available' },
      ],
      'C': [
        { id: 'C401', number: '401', type: '3 BHK', status: 'available' },
        { id: 'C402', number: '402', type: '3 BHK', status: 'available' },
        { id: 'C403', number: '403', type: '3 BHK', status: 'available' },
      ],
      'D': [
        { id: 'D401', number: '401', type: '3 BHK', status: 'available' },
        { id: 'D402', number: '402', type: '3 BHK', status: 'sold' },
      ],
    },
    '5': {
      'A': [
        { id: 'A501', number: '501', type: '2 BHK', status: 'available' },
        { id: 'A502', number: '502', type: '2 BHK', status: 'available' },
        { id: 'A503', number: '503', type: '3 BHK', status: 'sold' },
        { id: 'A504', number: '504', type: '2 BHK', status: 'available' },
      ],
      'B': [
        { id: 'B501', number: '501', type: '2 BHK', status: 'available' },
        { id: 'B502', number: '502', type: '3 BHK', status: 'available' },
        { id: 'B503', number: '503', type: '2 BHK', status: 'sold' },
        { id: 'B504', number: '504', type: '2 BHK', status: 'sold' },
      ],
      'C': [
        { id: 'C501', number: '501', type: '3 BHK', status: 'sold' },
        { id: 'C502', number: '502', type: '3 BHK', status: 'available' },
        { id: 'C503', number: '503', type: '3 BHK', status: 'available' },
      ],
      'D': [
        { id: 'D501', number: '501', type: '3 BHK', status: 'available' },
        { id: 'D502', number: '502', type: '3 BHK', status:   'sold'},
      ],
    },
    '6': {
      'A': [
        { id: 'A601', number: '601', type: '2 BHK', status: 'available' },
        { id: 'A602', number: '602', type: '2 BHK', status: 'available' },
        { id: 'A603', number: '603', type: '3 BHK', status: 'sold' },
        { id: 'A604', number: '604', type: '2 BHK', status: 'available' },
      ],
      'B': [
        { id: 'B601', number: '601', type: '2 BHK', status: 'available' },
        { id: 'B602', number: '602', type: '3 BHK', status: 'available'},
        { id: 'B603', number: '603', type: '2 BHK', status: 'sold' },
        { id: 'B604', number: '604', type: '2 BHK', status: 'available' },
      ],
      'C': [
        { id: 'C601', number: '601', type: '3 BHK', status: 'available' },
        { id: 'C602', number: '602', type: '3 BHK', status: 'available' },
        { id: 'C603', number: '603', type: '3 BHK', status: 'available' },
      ],
      'D': [
        { id: 'D601', number: '601', type: '3 BHK', status: 'sold' },
        { id: 'D602', number: '602', type: '3 BHK', status: 'available' },
      ],
    },
    '7': {
      'A': [
        { id: 'A701', number: '701', type: '2 BHK', status: 'available' },
        { id: 'A702', number: '702', type: '2 BHK', status: 'available' },
        { id: 'A703', number: '703', type: '3 BHK', status: 'available' },
        { id: 'A704', number: '704', type: '2 BHK', status: 'available' },
      ],
      'B': [
        { id: 'B701', number: '701', type: '2 BHK', status: 'available' },
        { id: 'B702', number: '702', type: '3 BHK', status: 'available' },
        { id: 'B703', number: '703', type: '2 BHK', status: 'available' },
        { id: 'B704', number: '704', type: '2 BHK', status: 'available' },
      ],
      'C': [
        { id: 'C701', number: '701', type: '3 BHK', status: 'available' },
        { id: 'C702', number: '702', type: '3 BHK', status: 'available' },
        { id: 'C703', number: '703', type: '3 BHK', status: 'available' },
      ],
      'D': [
        { id: 'D701', number: '701', type: '3 BHK', status: 'available' },
        { id: 'D702', number: '702', type: '3 BHK', status: 'available' },
      ],
    },
  };

  // Get all units for the current floor and wing selection
  const getFilteredUnits = () => {
    if (activeWing === 'all') {
      // Return all wings for the active floor
      return Object.keys(unitData[activeFloor]).flatMap(wing => 
        unitData[activeFloor][wing].map(unit => ({
          ...unit,
          wing
        }))
      );
    } else {
      // Return only the selected wing
      return unitData[activeFloor][activeWing].map(unit => ({
        ...unit,
        wing: activeWing
      }));
    }
  };

  const filteredUnits = getFilteredUnits();

  // Calculate statistics
  const allUnits = Object.keys(unitData).flatMap(floor => 
    Object.keys(unitData[floor]).flatMap(wing => 
      unitData[floor][wing]
    )
  );
  
  const totalUnits = allUnits.length;
  const availableUnits = allUnits.filter(unit => unit.status === 'available').length;
  const soldUnits = allUnits.filter(unit => unit.status === 'sold').length;
  const reservedUnits = allUnits.filter(unit => unit.status === 'reserved').length;

  // Calculate statistics for current floor
  const floorUnits = Object.keys(unitData[activeFloor]).flatMap(wing => unitData[activeFloor][wing]);
  const floorAvailableUnits = floorUnits.filter(unit => unit.status === 'available').length;
  const floorSoldUnits = floorUnits.filter(unit => unit.status === 'sold').length;
  const floorReservedUnits = floorUnits.filter(unit => unit.status === 'reserved').length;

  // Get status color and icon
  const getStatusInfo = (status) => {
    switch (status) {
      case 'available':
        return { 
          bgColor: 'bg-emerald-50', 
          borderColor: 'border-emerald-200',
          textColor: 'text-emerald-600',
          iconBg: 'bg-emerald-500',
          icon: <Check className="h-5 w-5 text-white" />
        };
      case 'sold':
        return { 
          bgColor: 'bg-red-50', 
          borderColor: 'border-red-200',
          textColor: 'text-red-600',
          iconBg: 'bg-red-500',
          icon: <X className="h-5 w-5 text-white" />
        };
      case 'reserved':
        return { 
          bgColor: 'bg-amber-50', 
          borderColor: 'border-amber-200',
          textColor: 'text-amber-600',
          iconBg: 'bg-amber-500',
          icon: <Check className="h-5 w-5 text-white" />
        };
      default:
        return { 
          bgColor: 'bg-gray-50', 
          borderColor: 'border-gray-200',
          textColor: 'text-gray-600',
          iconBg: 'bg-gray-500',
          icon: <X className="h-5 w-5 text-white" />
        };
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">Flat Booking Status</h1>
                <p className="text-blue-100 mt-1">Check real-time availability of units</p>
              </div>
              <div className="hidden md:block">
                <Building className="h-12 w-12 text-white opacity-80" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-4 md:p-6">
            {/* Legend */}
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Sold</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-amber-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Reserved</span>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                <Home className="h-4 w-4 mr-1" />
                <span>Total Units: {totalUnits}</span>
              </div>
            </div>

            {/* Filters */}
            <div className="mb-6 space-y-4">
              {/* Floor Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Floor</label>
                <div className="flex flex-wrap gap-2">
                  {floors.map((floor) => (
                    <button
                      key={floor.id}
                      onClick={() => setActiveFloor(floor.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeFloor === floor.id
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {floor.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Wing Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Wing</label>
                <div className="flex flex-wrap gap-2">
                  {wings.map((wing) => (
                    <button
                      key={wing.id}
                      onClick={() => setActiveWing(wing.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeWing === wing.id
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {wing.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Floor Status Summary */}
            <div className="bg-indigo-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-indigo-800">
                  {floors.find(f => f.id === activeFloor)?.name} Status
                </h3>
                <div className="flex gap-4 text-sm">
                  <span className="text-emerald-600 font-medium">{floorAvailableUnits} Available</span>
                  <span className="text-red-600 font-medium">{floorSoldUnits} Sold</span>
                  {floorReservedUnits > 0 && (
                    <span className="text-amber-600 font-medium">{floorReservedUnits} Reserved</span>
                  )}
                </div>
              </div>
            </div>

            {/* Units Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {filteredUnits.length > 0 ? (
                filteredUnits.map((unit) => {
                  const statusInfo = getStatusInfo(unit.status);
                  return (
                    <div
                      key={unit.id}
                      className={`border rounded-lg p-4 ${statusInfo.borderColor} ${statusInfo.bgColor} transition-transform hover:scale-105`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-full ${statusInfo.iconBg} flex items-center justify-center`}>
                            {statusInfo.icon}
                          </div>
                          <span className="ml-2 font-semibold text-gray-700">Wing {unit.wing}</span>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          unit.status === 'available' ? 'bg-emerald-100 text-emerald-800' : 
                          unit.status === 'sold' ? 'bg-red-100 text-red-800' : 
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {unit.status.charAt(0).toUpperCase() + unit.status.slice(1)}
                        </span>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-900">Unit {unit.number}</p>
                        <p className="text-sm text-gray-600 mt-1">{unit.type}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-8 text-gray-500">
                  No units available for the selected floor and wing.
                </div>
              )}
            </div>

            {/* Overall Summary */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Booking Summary</h3>
                <button 
                  onClick={() => setShowSummary(!showSummary)}
                  className="text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  {showSummary ? (
                    <>
                      <ChevronUp className="h-5 w-5 mr-1" />
                      <span className="text-sm">Hide</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-5 w-5 mr-1" />
                      <span className="text-sm">Show</span>
                    </>
                  )}
                </button>
              </div>
              
              {showSummary && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Total Units</p>
                    <p className="text-2xl font-bold text-gray-900">{totalUnits}</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <p className="text-sm text-gray-600 mb-1">Available Units</p>
                    <p className="text-2xl font-bold text-emerald-600">{availableUnits}</p>
                    <p className="text-sm text-emerald-800 mt-1">
                      {Math.round((availableUnits / totalUnits) * 100)}% of total
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <p className="text-sm text-gray-600 mb-1">Sold Units</p>
                    <p className="text-2xl font-bold text-red-600">{soldUnits}</p>
                    <p className="text-sm text-red-800 mt-1">
                      {Math.round((soldUnits / totalUnits) * 100)}% of total
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingStatus;