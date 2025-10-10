import React, { useState } from 'react';
<<<<<<< HEAD
import { Save, CheckCircle, Clock, MapPin, Scale, FileText, X } from 'lucide-react';
=======
import { Save, CheckCircle, Clock, MapPin, Scale, FileText } from 'lucide-react';
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
import { addWasteRecord } from '../utils/storage';
import { WasteRecord } from '../types';

interface TabletWasteFormProps {
  user: any;
  onRecordAdded: (record: WasteRecord) => void;
}

<<<<<<< HEAD
interface SelectedWaste {
  type: string;
  weight: string;
  notes: string;
}

=======
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
const WASTE_TYPES = [
  {
    id: 'organicos',
    name: 'Orgánicos',
    icon: '🥬',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
<<<<<<< HEAD
    id: 'organicos-citricos',
    name: 'Orgánicos (naranja/limón)',
    icon: '🍊',
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    id: 'inorganicos',
    name: 'Inorgánicos - no valorizables',
    icon: '🗑️',
    color: 'from-gray-500 to-slate-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200'
  },
  {
    id: 'pet',
    name: 'Pet',
=======
    id: 'plasticos',
    name: 'Plásticos PET',
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
    icon: '♻️',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
<<<<<<< HEAD
    id: 'plastico-duro',
    name: 'Plástico duro',
    icon: '🧴',
    color: 'from-indigo-500 to-purple-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  {
    id: 'emplaye',
    name: 'Emplaye',
    icon: '📦',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200'
=======
    id: 'papel',
    name: 'Papel y Cartón',
    icon: '📄',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200'
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
  },
  {
    id: 'vidrio',
    name: 'Vidrio',
    icon: '🍾',
    color: 'from-teal-500 to-green-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200'
  },
  {
    id: 'aluminio',
    name: 'Aluminio',
    icon: '🥤',
<<<<<<< HEAD
    color: 'from-slate-500 to-gray-600',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200'
  },
  {
    id: 'carton',
    name: 'Cartón',
    icon: '📦',
    color: 'from-amber-600 to-orange-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200'
  },
  {
    id: 'papel',
    name: 'Papel',
    icon: '📄',
    color: 'from-yellow-500 to-amber-600',
=======
    color: 'from-gray-500 to-slate-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200'
  },
  {
    id: 'laton',
    name: 'Latón',
    icon: '🔩',
    color: 'from-yellow-600 to-amber-700',
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  },
  {
<<<<<<< HEAD
    id: 'lata-conserva',
    name: 'Lata de conserva o latón',
    icon: '🥫',
    color: 'from-red-500 to-pink-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    id: 'tetrapak',
    name: 'Tetrapak',
    icon: '🧃',
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200'
  },
  {
=======
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
    id: 'textiles',
    name: 'Textiles',
    icon: '👕',
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
<<<<<<< HEAD
    id: 'chatarra',
    name: 'Chatarra',
    icon: '🔩',
    color: 'from-stone-500 to-gray-600',
    bgColor: 'bg-stone-50',
    borderColor: 'border-stone-200'
  },
  {
    id: 'cafe-composta',
    name: 'Café para composta',
    icon: '☕',
    color: 'from-amber-700 to-yellow-800',
    bgColor: 'bg-amber-100',
    borderColor: 'border-amber-400',
    special: true
=======
    id: 'electronicos',
    name: 'Electrónicos',
    icon: '📱',
    color: 'from-red-500 to-pink-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
  }
];

const HOTEL_AREAS = [
<<<<<<< HEAD
  { id: 'areas-publicas', name: 'Áreas públicas', icon: '🏛️' },
  { id: 'albercas', name: 'Albercas', icon: '🏊‍♂️' },
  { id: 'almacen', name: 'Almacén', icon: '📦' },
  { id: 'ama-llaves', name: 'Ama de llaves', icon: '🔑' },
  { id: 'audio-visual', name: 'Audio visual', icon: '🎥' },
  { id: 'banquetes', name: 'Banquetes', icon: '🍽️' },
  { id: 'bares', name: 'Bares', icon: '🍹' },
  { id: 'bodas', name: 'Bodas', icon: '💒' },
  { id: 'carpinteria', name: 'Carpintería', icon: '🔨' },
  { id: 'cocina-central', name: 'Cocina central', icon: '👨‍🍳' },
  { id: 'coco-cafe', name: 'Coco Café', icon: '☕' },
  { id: 'comedor-empleados', name: 'Comedor empleados', icon: '🍽️' },
  { id: 'comisariato', name: 'Comisariato', icon: '🏪' },
  { id: 'edificios', name: 'Edificios', icon: '🏢' },
  { id: 'entretenimiento', name: 'Entretenimiento', icon: '🎭' },
  { id: 'especialidades', name: 'Especialidades', icon: '🍴' },
  { id: 'eventos-banquetes', name: 'Eventos/Banquetes', icon: '🎉' },
  { id: 'jardineria', name: 'Jardinería', icon: '🌺' },
  { id: 'lavanderia', name: 'Lavandería', icon: '👔' },
  { id: 'limpieza-playa', name: 'Limpieza de playa', icon: '🏖️' },
  { id: 'mantenimiento', name: 'Mantenimiento', icon: '🔧' },
  { id: 'market', name: 'Market', icon: '🛒' },
  { id: 'minibares', name: 'Minibares/Servibar', icon: '🍺' },
  { id: 'oceana', name: 'Oceana', icon: '🌊' },
  { id: 'oficinas', name: 'Oficinas', icon: '🏢' },
  { id: 'poblado', name: 'Poblado', icon: '🏘️' },
  { id: 'proveedores', name: 'Proveedores', icon: '🚚' },
  { id: 'rh', name: 'RH', icon: '👥' },
  { id: 'room-service', name: 'Room Service/IRD', icon: '🛏️' },
  { id: 'seaside-grill', name: 'Seaside Grill', icon: '🔥' },
  { id: 'seguridad', name: 'Seguridad', icon: '🛡️' },
  { id: 'sommelier', name: 'Sommelier', icon: '🍷' },
  { id: 'spa', name: 'Spa', icon: '💆‍♀️' },
  { id: 'steward', name: 'Steward', icon: '🧹' },
  { id: 'tiendas', name: 'Tiendas', icon: '🛍️' },
  { id: 'tiendita-colegas', name: 'Tiendita colegas', icon: '🏪' },
  { id: 'uvc', name: 'UVC', icon: '💡' },
  { id: 'chatos', name: 'Chatos', icon: '🍻' }
];

export default function TabletWasteForm({ user, onRecordAdded }: TabletWasteFormProps) {
  const [selectedWastes, setSelectedWastes] = useState<SelectedWaste[]>([]);
=======
  { id: 'bar', name: 'Bar Principal', icon: '🍹' },
  { id: 'cocina', name: 'Cocina', icon: '👨‍🍳' },
  { id: 'recepcion', name: 'Recepción', icon: '🏨' },
  { id: 'mantenimiento', name: 'Mantenimiento', icon: '🔧' },
  { id: 'restaurante', name: 'Restaurante', icon: '🍽️' },
  { id: 'piscina', name: 'Piscina', icon: '🏊‍♂️' },
  { id: 'playa', name: 'Playa', icon: '🏖️' },
  { id: 'habitaciones', name: 'Habitaciones', icon: '🛏️' },
  { id: 'spa', name: 'Spa', icon: '💆‍♀️' },
  { id: 'jardines', name: 'Jardines', icon: '🌺' }
];

export default function TabletWasteForm({ user, onRecordAdded }: TabletWasteFormProps) {
  const [selectedType, setSelectedType] = useState<string>('');
  const [weight, setWeight] = useState('');
  const [notes, setNotes] = useState('');
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
  const [selectedArea, setSelectedArea] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(new Date().toTimeString().split(' ')[0].substring(0, 5));
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

<<<<<<< HEAD
  const handleWasteTypeToggle = (wasteType: typeof WASTE_TYPES[0]) => {
    const isSelected = selectedWastes.some(w => w.type === wasteType.name);
    
    if (isSelected) {
      setSelectedWastes(prev => prev.filter(w => w.type !== wasteType.name));
    } else {
      setSelectedWastes(prev => [...prev, { type: wasteType.name, weight: '', notes: '' }]);
    }
  };

  const updateWasteData = (type: string, field: 'weight' | 'notes', value: string) => {
    setSelectedWastes(prev => 
      prev.map(waste => 
        waste.type === type ? { ...waste, [field]: value } : waste
      )
    );
  };

  const removeWaste = (type: string) => {
    setSelectedWastes(prev => prev.filter(w => w.type !== type));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedWastes.length === 0 || !selectedArea) return;

    // Validate that all selected wastes have weights
    const invalidWastes = selectedWastes.filter(w => !w.weight || parseFloat(w.weight) <= 0);
    if (invalidWastes.length > 0) {
      alert('Por favor, ingresa el peso para todos los residuos seleccionados');
      return;
    }
=======
  const selectedWasteType = WASTE_TYPES.find(type => type.id === selectedType);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType || !weight || !selectedArea) return;
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1

    setLoading(true);

    try {
<<<<<<< HEAD
      const selectedAreaName = HOTEL_AREAS.find(area => area.id === selectedArea)?.name || selectedArea;
      
      // Create a record for each selected waste type
      for (const waste of selectedWastes) {
        const record = addWasteRecord({
          type: waste.type,
          location: selectedAreaName,
          weight: parseFloat(waste.weight),
          date,
          time,
          notes: waste.notes.trim() || undefined,
          createdBy: user.id
        });
        onRecordAdded(record);
      }
=======
      const record = addWasteRecord({
        type: selectedWasteType?.name || selectedType,
        location: HOTEL_AREAS.find(area => area.id === selectedArea)?.name || selectedArea,
        weight: parseFloat(weight),
        date,
        time,
        notes: notes.trim() || undefined,
        createdBy: user.id
      });

      onRecordAdded(record);
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
      
      // Show success message
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      
      // Reset form
<<<<<<< HEAD
      setSelectedWastes([]);
=======
      setSelectedType('');
      setWeight('');
      setNotes('');
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
      setSelectedArea('');
      setDate(new Date().toISOString().split('T')[0]);
      setTime(new Date().toTimeString().split(' ')[0].substring(0, 5));
    } catch (error) {
<<<<<<< HEAD
      console.error('Error al guardar los registros:', error);
=======
      console.error('Error al guardar el registro:', error);
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
    } finally {
      setLoading(false);
    }
  };

<<<<<<< HEAD
  const canSubmit = selectedWastes.length > 0 && selectedArea && 
    selectedWastes.every(w => w.weight && parseFloat(w.weight) > 0) && !loading;
=======
  const canSubmit = selectedType && weight && selectedArea && !loading;
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              🌱 Registro de Residuos
            </h1>
            <p className="text-lg text-gray-600">
<<<<<<< HEAD
              Captura múltiple desde tablet
=======
              Captura rápida y fácil desde tablet
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
            </p>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 z-50 animate-pulse">
            <CheckCircle className="w-6 h-6" />
<<<<<<< HEAD
            <span className="font-medium">¡Registros guardados exitosamente!</span>
=======
            <span className="font-medium">¡Registro guardado exitosamente!</span>
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Waste Type Selection */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Scale className="w-6 h-6 text-green-600" />
              </div>
<<<<<<< HEAD
              1. Selecciona los tipos de residuos (múltiple selección)
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {WASTE_TYPES.map((type) => {
                const isSelected = selectedWastes.some(w => w.type === type.name);
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handleWasteTypeToggle(type)}
                    className={`relative p-4 rounded-2xl border-3 transition-all duration-200 transform hover:scale-105 ${
                      type.special 
                        ? 'border-4 border-amber-400 bg-gradient-to-br from-amber-100 to-yellow-100 shadow-lg'
                        : ''
                    } ${
                      isSelected
                        ? `${type.borderColor} bg-gradient-to-br ${type.color} text-white shadow-xl`
                        : `${type.borderColor} ${type.bgColor} hover:shadow-lg`
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">{type.icon}</div>
                      <h3 className={`font-bold text-sm ${
                        isSelected ? 'text-white' : 'text-gray-800'
                      }`}>
                        {type.name}
                      </h3>
                      {type.special && !isSelected && (
                        <div className="text-xs text-amber-700 font-medium mt-1">
                          Especial
                        </div>
                      )}
                    </div>
                    
                    {isSelected && (
                      <div className="absolute -top-2 -right-2 bg-white rounded-full p-1">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Wastes Details */}
          {selectedWastes.length > 0 && (
=======
              1. Selecciona el tipo de residuo
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {WASTE_TYPES.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedType(type.id)}
                  className={`relative p-6 rounded-2xl border-3 transition-all duration-200 transform hover:scale-105 ${
                    selectedType === type.id
                      ? `${type.borderColor} bg-gradient-to-br ${type.color} text-white shadow-xl`
                      : `${type.borderColor} ${type.bgColor} hover:shadow-lg`
                  }`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">{type.icon}</div>
                    <h3 className={`font-bold text-lg ${
                      selectedType === type.id ? 'text-white' : 'text-gray-800'
                    }`}>
                      {type.name}
                    </h3>
                  </div>
                  
                  {selectedType === type.id && (
                    <div className="absolute -top-2 -right-2 bg-white rounded-full p-1">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Weight and Notes Input */}
          {selectedType && (
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
<<<<<<< HEAD
                2. Ingresa los detalles para cada residuo seleccionado
              </h2>
              
              <div className="space-y-4">
                {selectedWastes.map((waste) => {
                  const wasteType = WASTE_TYPES.find(t => t.name === waste.type);
                  return (
                    <div key={waste.type} className={`p-4 rounded-xl border-2 ${wasteType?.borderColor} ${wasteType?.bgColor}`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{wasteType?.icon}</span>
                          <h3 className="font-bold text-lg text-gray-800">{waste.type}</h3>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeWaste(waste.type)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Peso (kg) *
                          </label>
                          <input
                            type="number"
                            step="0.1"
                            min="0"
                            value={waste.weight}
                            onChange={(e) => updateWasteData(waste.type, 'weight', e.target.value)}
                            className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all"
                            placeholder="0.0"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Notas adicionales
                          </label>
                          <input
                            type="text"
                            value={waste.notes}
                            onChange={(e) => updateWasteData(waste.type, 'notes', e.target.value)}
                            className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all"
                            placeholder="Observaciones opcionales..."
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
=======
                2. Ingresa los detalles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Peso (kg) *
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-6 py-4 text-xl border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all"
                    placeholder="0.0"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Notas adicionales
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all resize-none"
                    placeholder="Observaciones opcionales..."
                  />
                </div>
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
              </div>
            </div>
          )}

          {/* Area Selection */}
<<<<<<< HEAD
          {selectedWastes.length > 0 && (
=======
          {selectedType && weight && (
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                3. Selecciona el área del hotel
              </h2>
              
<<<<<<< HEAD
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
=======
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
                {HOTEL_AREAS.map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setSelectedArea(area.id)}
<<<<<<< HEAD
                    className={`p-3 rounded-xl border-2 transition-all duration-200 transform hover:scale-105 ${
=======
                    className={`p-4 rounded-xl border-2 transition-all duration-200 transform hover:scale-105 ${
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
                      selectedArea === area.id
                        ? 'border-orange-500 bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg'
                        : 'border-orange-200 bg-orange-50 hover:shadow-md'
                    }`}
                  >
                    <div className="text-center">
<<<<<<< HEAD
                      <div className="text-lg mb-1">{area.icon}</div>
                      <span className={`font-semibold text-xs ${
=======
                      <div className="text-2xl mb-2">{area.icon}</div>
                      <span className={`font-semibold text-sm ${
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
                        selectedArea === area.id ? 'text-white' : 'text-gray-800'
                      }`}>
                        {area.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Date and Time */}
<<<<<<< HEAD
          {selectedWastes.length > 0 && (
=======
          {selectedType && (
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                Fecha y Hora
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Fecha
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-6 py-4 text-xl border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Hora
                  </label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-6 py-4 text-xl border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
<<<<<<< HEAD
          {selectedWastes.length > 0 && (
=======
          {selectedType && (
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
            <div className="text-center">
              <button
                type="submit"
                disabled={!canSubmit}
                className={`px-12 py-6 text-2xl font-bold rounded-2xl transition-all duration-200 transform ${
                  canSubmit
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 hover:scale-105 shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {loading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    Guardando...
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Save className="w-8 h-8" />
<<<<<<< HEAD
                    Guardar {selectedWastes.length} Registro{selectedWastes.length > 1 ? 's' : ''}
=======
                    Guardar Registro
>>>>>>> b64e23206617e3b413d01f977b4f08bcac08d4c1
                  </div>
                )}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}