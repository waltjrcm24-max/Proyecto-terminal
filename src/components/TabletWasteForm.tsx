import React, { useState } from 'react';
import { Save, CheckCircle, Clock, MapPin, Scale, FileText } from 'lucide-react';
import { addWasteRecord } from '../utils/storage';
import { WasteRecord } from '../types';

interface TabletWasteFormProps {
  user: any;
  onRecordAdded: (record: WasteRecord) => void;
}

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
    id: 'plasticos',
    name: 'Plásticos PET',
    icon: '♻️',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'papel',
    name: 'Papel y Cartón',
    icon: '📄',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200'
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
    color: 'from-gray-500 to-slate-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200'
  },
  {
    id: 'laton',
    name: 'Latón',
    icon: '🔩',
    color: 'from-yellow-600 to-amber-700',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  },
  {
    id: 'textiles',
    name: 'Textiles',
    icon: '👕',
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'electronicos',
    name: 'Electrónicos',
    icon: '📱',
    color: 'from-red-500 to-pink-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  }
];

const HOTEL_AREAS = [
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
  const [selectedArea, setSelectedArea] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(new Date().toTimeString().split(' ')[0].substring(0, 5));
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const selectedWasteType = WASTE_TYPES.find(type => type.id === selectedType);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType || !weight || !selectedArea) return;

    setLoading(true);

    try {
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
      
      // Show success message
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      
      // Reset form
      setSelectedType('');
      setWeight('');
      setNotes('');
      setSelectedArea('');
      setDate(new Date().toISOString().split('T')[0]);
      setTime(new Date().toTimeString().split(' ')[0].substring(0, 5));
    } catch (error) {
      console.error('Error al guardar el registro:', error);
    } finally {
      setLoading(false);
    }
  };

  const canSubmit = selectedType && weight && selectedArea && !loading;

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
              Captura rápida y fácil desde tablet
            </p>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 z-50 animate-pulse">
            <CheckCircle className="w-6 h-6" />
            <span className="font-medium">¡Registro guardado exitosamente!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Waste Type Selection */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Scale className="w-6 h-6 text-green-600" />
              </div>
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
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
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
              </div>
            </div>
          )}

          {/* Area Selection */}
          {selectedType && weight && (
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                3. Selecciona el área del hotel
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {HOTEL_AREAS.map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setSelectedArea(area.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 transform hover:scale-105 ${
                      selectedArea === area.id
                        ? 'border-orange-500 bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg'
                        : 'border-orange-200 bg-orange-50 hover:shadow-md'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">{area.icon}</div>
                      <span className={`font-semibold text-sm ${
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
          {selectedType && (
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
          {selectedType && (
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
                    Guardar Registro
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